
import React from "react";
import ServicesCard from "../components/ServicesCard";
import Yellow4 from "../assets/Vector/Yellow4.png";
import DogPetVisit from "../assets/Pets/Only Pets/DogPetVisit.jpg";
import CatPetVisit from "../assets/Pets/Only Pets/CatPetVisit.jpg";
import PetBath from "../assets/Pets/Only Pets/PetBath.jpg";
import PetGroom from "../assets/Pets/Only Pets/PetGroom.jpg";
import PetGroup from "../assets/Pets/Only Pets/PetGroup.avif";
import Instagram from "../assets/Social Logos/Instagram.png";

export default function Services() {
  return (
    <section id="services" className="aos-mobile">
      <div className="row container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1
            className="heading-text1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Services
          </h1>
          <img src={Yellow4} alt="Yellow4" className="Yellow4" />
          <h3
            className="para-1 d-flex justify-content-center align-items-center text-center"
            style={{ marginTop: "0rem" }}
            data-aos="fade-up"
            data-aos-duration="950"
            data-aos-delay="200"
          >
            Explore our range of services designed to meet your needs and exceed
            expectations.
            <br />
            Explore the range of services we offer
          </h3>
        </div>

        <div className="row mt-lg-5 d-flex justify-content-center align-items-center Graphics-3">
          <div
            className="col-lg-5 d-flex justify-content-center align-items-center mt-3"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <ServicesCard
              img={DogPetVisit}
              servicename="Dog pet visit"
              servicepara="Spoil your furry friend with a pampering Dog Pet Visit! We'll shower your pooch with love and attention while you're away, ensuring they stay happy, healthy, and entertained."
            />
          </div>
          <div
            className="col-lg-5 d-flex justify-content-center align-items-center mt-3"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <ServicesCard
              img={CatPetVisit}
              servicename="Cat pet visit"
              servicepara="That's where our Cat Pet Visit service comes in! We'll shower your kitty with the attention and enrichment they crave, ensuring they stay happy, healthy, and entertained until you return."
            />
          </div>
        </div>

        <div className="row mt-lg-5 d-flex justify-content-center align-items-center Graphics-3">
          <div
            className="col-lg-5 d-flex justify-content-center align-items-center mt-3"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <ServicesCard
              img={PetBath}
              servicename="Pet bath"
              servicepara="Transform Your Grimy Pup into a Sparkling Wonder with our Pet Bath! Give them the spa treatment they deserve with our Pet Bath service!"
            />
          </div>
          <div
            className="col-lg-5 d-flex justify-content-center align-items-center mt-3"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <ServicesCard
              img={PetGroom}
              servicename="Pet grooming"
              servicepara="More than just a makeover, our grooming service is a wellness experience that promotes your pet's health and happiness!"
            />
          </div>

          <h1
            className="heading-text1 mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Follow us on Instagram
          </h1>
          <h3
            className="para-1 d-flex justify-content-center align-items-center text-center"
            style={{ marginTop: "0rem" }}
            data-aos="fade-up"
            data-aos-duration="950"
          >
            Together, let's explore a visual tapestry that reflects the essence
            of our passions and interests
          </h3>

          <div
            className="col-lg-8 d-flex  justify-content-center  align-items-center mt-3 Graphics-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img
              src={PetGroup}
              alt="Follow us on Instagramm"
              style={{ height: "25rem" }}
              className="PetGroup"
            />
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center ">
            <div className="row d-flex justify-content-center align-items-center">
              <div
                className="col-lg-12 d-flex justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  style={{ height: "4rem" }}
                />
              </div>

              <div className="col-lg-12 d-flex justify-content-center align-items-center">
                <h1
                  className="heading-text d-flex justify-content-center align-items-center mx-2"
                  style={{
                    fontSize: "2rem",
                    letterSpacing: "0.6px",
                    textDecoration: "underline",
                    textUnderlineOffset: "0.6rem",
                  }}
                >
                  petcare.mohitjaiswal
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
