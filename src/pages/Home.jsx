
import React from 'react'
import Button from '../components/Button'
import Yellow1 from '../assets/Vector/Yellow1.png'
import Red1 from '../assets/Vector/Red1.png'
import Yellow5 from '../assets/Vector/Yellow5.png'
import Dog1 from '../assets/Pets/Only Pets/Dog1.jpg'

export default function Home() {
    return(
      <section id="home">
      <img src={Yellow1} alt="Yellow1" className='Yellow1' />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-0">
            <div className="col-lg-7 col-md-12">
              <h1 className="main-text" style={{marginTop: "0rem"}} data-aos="fade-up" data-aos-duration="900">No matter how you're feeling, a little   <mark className="text-warning" style={{ backgroundColor: "#131e25", paddingTop: 0, paddingBottom: 0, paddingLeft: 3, paddingRight: 3, borderRadius: 1, fontWeight: 600, fontSize: 80}}>dog</mark>{" "}gonna{" "}<mark className="bg-danger rounded-pill" style={{backgroundColor: "#131e25", paddingTop: 0, paddingBottom: 0, paddingLeft: 3, paddingRight: 3, borderRadius: 1, fontWeight: 600, color: "#131e25"}}>love</mark> you.</h1>

              <h3 className="para-1 d-flex justify-content-center align-items-center" style={{marginTop: "2rem"}} data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
              Welcome to petCare, where we specialize in grooming to make your pets as smart as you are. Our personal vets provide tailored care, ensuring your pet's well-being is our top priority. 
              UBook your first appointment now for a complimentary check-up and give your pet the care they deserve.              
              </h3>

              <a href="/bookyourapp">
                <Button 
                  label="Book an Appointment"
                  c="main-btn"
                  type="start"
                />
              </a>
            </div>
            <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center Graphics-1" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="600">
            <img src={Red1} alt="Yellow1" className='Red1' />
              <img
                src={Dog1}
                alt="Dog1"
                width={400}
                className='Dog1'
              />
            <img src={Yellow5} alt="Yellow1" className='Yellow5' />
            </div>

          </div>
        </div>
      </div>
    </section>
    ) 
}