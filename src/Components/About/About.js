import React from 'react';
import './About.css';
import img2 from '../Images/img2.jpg';


const About = () => {
  return (
    <div id="about">
       <div className="container mt-5 " >
      <div className="row">
        <div className="col-lg-6 mb-4 order-2 order-lg-1 ">
          <div className="card h-100">
            <img className="card-img-top" src={img2} alt="ew" />

            <div className="card-body">
              <h5 className="card-title text-decoration-underline text-primary">
                Other Services
              </h5>

              <p className="card-text">
                In addition to transportation, we also offer comprehensive logistics services. Our logistics team has the skills and expertise necessary to manage all aspects of the supply chain, from warehousing and distribution to inventory management and more. We take a collaborative approach to logistics, working closely with our clients to ensure that their products are delivered to the right place at the right time.
              </p>

              <p className="card-text">
                At Baraka Multi-services Ltd, we are committed to providing exceptional service and building long-term relationships with our clients. We believe in transparency, honesty, and integrity, and we strive to uphold these values in everything we do. If you're looking for reliable transportation and logistics services in Kenya, look no further than Baraka Multi-services Ltd.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4 order-1 order-lg-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-decoration-underline text-primary">
                Brief Introduction
              </h5>

              <p className="card-text">
                Baraka Multi-services Ltd is a leading transportation and logistics company based in Mombasa, Kenya. With over 15 years of experience in the industry, our CEO has a wealth of knowledge and expertise that allows us to provide exceptional service to our clients.
              </p>

              <p className="card-text">
                At Baraka Multi-services Ltd, we specialize in transportation using trucks to move all kinds of goods. Our team of professionals is committed to ensuring that your goods are delivered safely and on time. We understand that every client has unique needs, and we work closely with our clients to provide customized transportation solutions that meet their specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <section className="mb-5 mt-3 mb-lg-10">
        <div className="row mt-5 gx-xl-5">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card shadow rounded-3 h-100 ms-2">
              <div className="card-header pt-4">
                <p className="text-uppercase text-center text-primary">
                  <strong>Mission</strong>
                </p>
              </div>
              <div className="card-body">
                <p className="text-justify font-weight-bold text-decoration-none">
                  To provide efficient and reliable logistics and transportation
                  services that meet the needs of our clients while fostering
                  sustainable growth and development in the region.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card shadow rounded-3 h-100">
              <div className="card-header pt-4">
                <p className="text-uppercase text-primary text-center">
                  <strong>Vision</strong>
                </p>
              </div>
              <div className="card-body">
                <p className="">
                  To be the leading logistics and transportation company in
                  Kenya and the East African region, providing top-notch
                  services to our clients while contributing to the economic
                  growth and development of the region.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-lg-0">
            <div className="card shadow rounded-3 h-100">
              <div className="card-header text-center pt-4">
                <p className="text-uppercase text-primary">
                  <strong>Core Values</strong>
                </p>
              </div>
              <div className="card-body">
                <ul>
                  <li className="mb-3">Customer satisfaction</li>
                  <li className="mb-3">Reliability</li>
                  <li className="mb-3">Integrity</li>
                  <li className="mb-3">Professionalism</li>
                  <li className="mb-3">Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
