import React,{useEffect} from 'react';
import './footer.css'
import Aos from 'aos';
import "aos/dist/aos.css"
export default function Footer(){
    useEffect(()=>{
        Aos.init({ duration : 1000 })
    },[])
      return( <div data-aos="fade-down" className="body">
      <div className="getintouch">
          <p>GET IN TOUCH</p>
          <a>(480)624-5200</a>
          <a>mail@discoverylandco.com</a>
      </div>
      <div className="navlinks">
          <a>About DlC</a>
          <a>Our Worlds</a>
          <a>Experiences</a>
          <a>Gallery</a>
          <a>Press</a>
          <a>Contact</a>
      </div>
      <div className="details">
          <a>Magazine</a>
          <a>Careers</a>
          <a>Foundation</a>
          <a>Company</a>
          <a>Privacy</a>
      </div>
      <div className="rights">
          <p> @Discovery Land Company. All Rights Reserved.
          </p>
      </div>
  </div>)
  }
