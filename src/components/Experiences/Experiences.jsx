import React,{useEffect} from 'react';
import './Experiences.css'
import Appbar from '../Appbar/Appbar'
import boatimage from '../../Assets/boatgolf.jpeg'
import swim from '../../Assets/swim.jpg'
import golf1 from '../../Assets/golf1.jpg'
import outdoor from '../../Assets/Outdoor.jpg'
import wellnes from '../../Assets/wellnes.jpg'
import Footer from '../footer/footer'
import Aos from 'aos';
import "aos/dist/aos.css"
export default function Experience(){
        useEffect(()=>{
            Aos.init({ duration : 1000 })
        },[])
 
        return (
            <>
                <div className="app"> <Appbar /></div>

                 <div className="main">
                    <div data-aos="fade-left" className="img"><img src={boatimage} alt="" srcset="" /></div>
                    <div data-aos="fade-right" className="header">Unforgettable Experiences
                </div>    <p data-aos="zoom-in">Memorable Days.Exceptional nights. We believe it's our mission to make every minute matter.
                    So you can live your life to the fullest,with the people closest to you.
            </p>
                </div>
                <div data-aos="zoom-in" className="exclusive" >
                    Our worlds are designed to offer you endlesss opportunities to share incredible once in a life-time
                    experiences and adventure ever single moment of the day .Each of our settings offers a relaxed
                    sense of community through exceptional clubhouses,world class golf courses ,welcoming staff and an extensive
                    outdoor pursuitsprogram.    Create moments of joy and wonder ,unforgettable memories and cherished times ,
                    together with those who matters most.
            </div> 
                <div data-aos="zoom-in" className="swim"><img src={swim} alt="" /></div>
                <div className="golf">
                    <img  data-aos="zoom-in" src={golf1} alt="" />
                    <div data-aos="zoom-in-up" className="golfbox font">
                        <p  className="p">Golf</p>

                        we commisioned the world's most renowed course architects to design spectaculargolf experiences
                        on challenging yet incredibly playable 18-hole courses .Our trademark comfort stations alse set new standards
                        in course amenities
                </div></div>{/*
                    <div className="outdoor">
                        <img src={outdoor} alt="" />
                    </div>
                    <div className="outdoorbox font ">
                       <p className="p"> Outdoor Pursuits</p>

                        Our signature outdoor pursuits program is designed for families to create memories 
                        together .Whether you're trying a new sport or taking a day trip ,our team will ensure you 
                        make the most of every minute with activities designed to help you take advantage of everthing each region
                        has to offer
                    </div>
                    <div className="wellness">
                      <img src={wellnes} alt=""/>
                    </div>
                    <div className="wellbox">
                        <p className="p">Wellness</p>
                       <p className="font"> Unwind at an indulgent spa .Set challenging targets with a tailor-made fitness plan .
                        or let our talentedd chefs treat you to favorful international menus created using the finest,
                        carefully selected foods sourced locally from organic farms.</p>
                    </div>

                </div>

             */}

            </>
        )
    }
