import { render } from '@testing-library/react';
import React,{useEffect} from 'react';
import image from '../../Assets/driftwood.jpg';
import image1 from '../../Assets/Home_76fe09b415dcada4f46ba4114338562c.jpg';
import Slideshow from '../SlideShow/slideshow';
import './Dashboard.css'
import Appbar from '../Appbar/Appbar';
// import NormalAppBar from '../Appbar/Appbar';
import Gallery from '../Gallery/gallery';
import Footer from '../footer/footer'
import Aos from 'aos';
import "aos/dist/aos.css"



class Explore extends React.Component{
    render(){
        return(
            <div className="explore">
            <h3 className="explorefont">Explore <br/> Our World</h3>
            <div className="explorecontent">From majestic mountainscapes  to beautiful 
            coastlines ...breathtaking worlds to uncover  and experience </div>
            </div>)
    }
}

function DashboardContent(){
       useEffect(()=>{
           Aos.init({ duration : 1000 })
       },[])

        return (
            <div className="welcomeparent" >
                <div data-aos="fade-left" className="welcomeheader">Welcome to<br/>Our World</div>
                <div data-aos="fade-right"   className="welcomecontent" >
                    Discover the unique atmosphere of our  private residential club communities.
                    once experienced.Never forgetten.this is classic,comfortable,modern living in nature's most spectacular settings worldwide.Reassuringly exclusive
                    generally welcoming.Find your uniue world- a place where families love to be;creating unforgetablwe moments,together
                </div>
                <div data-aos="zoom-in" className="welcomeimage1">
                    <img src={image} alt=""/>
                </div>
                <div data-aos="zoom-in" className="welcomeimage2">
                <img src={image1} alt=""/>
                </div>
            </div>
        )
    }


export default class Main extends React.Component{

     getRndInteger(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    getRndColor(){
        var r=this.getRndInteger(0,255);
        var g=this.getRndInteger(0,255);
        var b=this.getRndInteger(0,255);
        return "rgb("+r+","+g+","+b+")";
    }
   handle = (e)=>{
        var circle = document.getElementById("circle");
        circle.style.top = e.pageY + "px";
        circle.style.left = e.pageX +"px";      
        circle.style.border = "1px solid white ";
     
   }

   
       
       render(){
        return(
            <div onMouseMove={this.handle} >
                
                <div id="circle"></div> 
            

    <div className="app">< Appbar /></div>
    <Slideshow  name="purushoth" />
   <DashboardContent />
     < Footer  / > 
    </div>
    )
    }
}