import React,{useEffect} from 'react';
import Mountain from '../../Assets/Mountain.jpg'
import LifeStyle from '../../Assets/LifeStyle.jpeg'
import Golf from '../../Assets/golf.jpg'
import Landscapes from '../../Assets/Landscapes.jpg'
import Wellness from '../../Assets/Wellness.jpg'
import clubhouses from '../../Assets/Clubhouses.jpg'
import OutdoorPursuits from '../../Assets/OutdoorPursuits.jpg'
import './gallery.css'
import Appbar from '../Appbar/Appbar'
import Footer from '../footer/footer'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Gallery(){
    useEffect(()=>{
        Aos.init({ duration : 1000 })
    },[])
    return(
        <div className="image">
           <div className="app"> <Appbar /></div>
        <img data-aos="zoom-in" src={Mountain} alt="mountain"/>
       <div className="side">
        <img data-aos="zoom-in" src={LifeStyle} alt="mountain"/>
        <img data-aos="zoom-in" src={Golf} alt="mountain"/>
        <img data-aos="zoom-in" src={Landscapes} alt="mountain"/>
        <img data-aos="zoom-in" src={Wellness} alt="mountain"/>
        <img data-aos="zoom-in" src={clubhouses} alt="mountain"/>
        <img data-aos="zoom-in" src={OutdoorPursuits} alt="mountain"/>
        < Footer />
        </div>
        </div>
    )
}
