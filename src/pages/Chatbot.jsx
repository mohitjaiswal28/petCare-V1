import { useState, useEffect } from "react";
import "../App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useAuth } from "../store/ContextAPI";
import { useNavigate } from "react-router-dom";

const API_KEY = "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";

const App = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Simba! Don't ask me something!",
      sentTime: "just now",
      sender: "Simba",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      if (response.error && response.error.type === "insufficient_quota") {
        const errorMessage =
          "We regret to inform you that our service is currently unavailable due to unforeseen issues related to the cost of API keys.";
        const errorResponse = {
          message: errorMessage,
          sender: "Simba",
        };
        setMessages((prevMessages) => [...prevMessages, errorResponse]);
      } else {
        const content = response.choices[0]?.message?.content;
        if (content) {
          const chatGPTResponse = {
            message: content,
            sender: "ChatGPT",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
        }
      }
    } catch (error) {
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      }
    );

    return response.json();
  }

  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1
            className="heading-text"
            data-aos="fade-up"
            data-aos-duration="550"
          >
            Hi {user.name}, Talk to Simba
          </h1>

          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-9 col-md-12 mt-3  d-flex justify-content-center align-items-center">
              <div id="chatbot">
                <div>
                  <MainContainer
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #e0a800",
                      borderRadius: "20px",
                      width: "auto",
                    }}
                  >
                    <ChatContainer style={{ backgroundColor: "transparent" }}>
                      <MessageList
                        scrollBehavior="smooth"
                        typingIndicator={
                          isTyping ? (
                            <TypingIndicator content="Simba is typing" />
                          ) : null
                        }
                        style={{
                          backgroundColor: "transparent",
                          padding: "20px",
                          width: "100%",
                        }}
                      >
                      {messages.map((message, i) => (
                        <Message
                          key={i}
                          model={message}
                          style={{ lineHeight: "2rem" }}
                        />
                      ))}
                      </MessageList>
                      <MessageInput
                        placeholder="Send a Message"
                        onSend={handleSendRequest}
                        style={{
                          backgroundColor: "transparent",
                          marginTop: "1rem",
                          padding: "1rem 0",
                          width: "100%",
                        }}
                      />
                    </ChatContainer>
                  </MainContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
