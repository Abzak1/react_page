import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className='mb-7 n'>
      <div className='  d-flex flex-fill flex-wrap flex-sm-fill mb-14'>
        <nav className="d-flex flex-wrap flex-column navbar flex-sm-fill navbar-expand-md fixed-top mb-sm-10  mt-2 ms-2 me-2  navbar-dark bg-primary ">
          <div className="container-fluid">
            <div className="navbar-brand  d-flex flex-column flex-wrap">
              <div className=''>
                <h4 className="">BARAKA MULTISERVICES</h4>
                <h5 className="">Infinite Possibilities</h5>
              </div>
            </div>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-5 mb-lg-0 me-5">
                <li className="nav-item">
                  <Link className="nav-link fs-5" activeclassname="active" to='hero' spy={true} smooth={true} hashSpy={true} offset={-150} ignoreCancelEvents={false}
                    spyThrottle={500} isDynamic={true} duration={500} onClick={handleLinkClick}>
                    Home 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" activeclassname="active" to="about" spy={true} smooth={true} hashSpy={true} offset={-330} ignoreCancelEvents={false}
                    spyThrottle={500} isDynamic={true} duration={500} onClick={handleLinkClick}>
                    About 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5" activeclassname="active" to="services" spy={true} smooth={true} hashSpy={true} ignoreCancelEvents={false}
                    spyThrottle={500} isDynamic={true} offset={-150} duration={500} onClick={handleLinkClick}>
                    Services 
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link fs-5" activeclassname="active" to='contact' spy={true} smooth={true} hashSpy={true} ignoreCancelEvents={false}
                    spyThrottle={500} isDynamic={true} offset={-230} duration={500} onClick={handleLinkClick}>
                    Contacts 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
