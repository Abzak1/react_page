import React from 'react'
import img2 from '../Images/img2.jpg';
import img1 from '../Images/img1.jpg';
import service2 from '../Images/service3.jpg';

const Services = () => {
  return (
    <div className='mb-14 mt-5 ps-2' id='services'>
     <span  className='card-title  text-primary border rounded-4 text-center shadow bg-primary'> <h3  className='card-title  text-light border rounded-4 text-center shadow bg-primary'>Our Services</h3> </span>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={img2} className="card-img-top" alt="Skyscrapers"/>
            <div className="card-body">
              <h5 className="card-title  text-light border rounded-4 text-center shadow bg-primary">Transportation</h5>
              <p className="card-text">
              We reliable and efficient transportation service for any type of goods. Whether you need to transport perishable goods, fragile items or heavy machinery, we have the expertise and the equipment to get your goods delivered safely and on time.</p>
              <p>With our experienced drivers and well-maintained vehicles, you can be assured of a hassle-free and timely delivery.</p> 
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={service2} className="card-img-top" alt="Los Angeles Skyscrapers"/>
            <div className="card-body">
              <h5 className="card-title  text-light border rounded-4 text-center shadow bg-primary">Logistics</h5>
              <p className="card-text">At Baraka Multiservices, we offer a wide range of logistics solutions to meet your business needs. Whether you need warehousing, distribution, or inventory management, we have the expertise to provide you with a customized solution that meets your unique requirements..</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={img1} className="card-img-top" alt="Palm Springs Road"/>
            <div className="card-body">
              <h5 className="card-title  text-light border rounded-4 text-center shadow bg-primary">Trading Activities</h5>
              <p className="card-text">
              Baraka Multiservices is involved in trading activities, providing you with a wide range of products at competitive prices. We source our products from reliable suppliers and ensure that they meet the highest quality standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 
