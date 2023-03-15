import React from 'react'
import { Link } from 'react-scroll';






const Home = () => {
  return (
    <div id= "hero" className='mb-4'>
     
      <section className='section'>
        <div className='container'>
          <div className='row'> 
          <div className='col-md-12'>
            
            <div className="card" >
  <div className="card-body d-flex flex-column align-items-center justify-content-center">
    <h3 className="card-title text-primary  text-decoration-underline "> BARAKA MULTISERVICES LTD</h3>

    <p className="card-text font-weight-bold text-black">Baraka Multiservices Ltd is a Kenyan-based company that offers a range of services in the logistics industry. With over 18 years of experience in the field, our CEO brings a wealth of knowledge and expertise to our company, enabling us to deliver high-quality services to our clients.</p>
   <Link to= "about" ><button type="button" className="btn btn-warning shadow">Read More</button></Link>
  </div>
</div>
          </div>
          </div>
        </div>

      </section>
     
    </div>
  )
}

export default Home