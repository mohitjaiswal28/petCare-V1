
import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./layouts/Footer";
import Error404 from "./pages/Error404";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import BookYourApp from "./pages/BookYourApp";
import MyProfile from "./pages/MyProfile";
import Simba from "./pages/Simba";

// Importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/createuser" element={<CreateUser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/bookyourapp" element={<BookYourApp />}></Route>
        <Route path="/myprofile" element={<MyProfile />}></Route>
        <Route path="/simba" element={<Simba />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}