import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    
    <div className=''>
      <Navbar/>
      
      <Carousel/> 
      
      
      

   <Home/>
   <About/>
   <Services/>
   <Contact/>
   
    
   
   
   
     <Footer/>
      </div>
       
  );
}

export default App;
