import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Appbar.css'
import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom'
import Gallery from '../Gallery/gallery';
import Dashboard from '../DashBoard/Dashboard'
import { render } from '@testing-library/react';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger} >
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
const useStyles = makeStyles({
    root: {
        boxShadow: "none",
        marginTop: "2%"
    }
});




 function scroll(){
    
}

    
export default class Appbar extends React.Component {
    constructor(props){
        super(props)
    }
    // scroll =()=>{
    //     console.log("scroll function");
    //     var element = document.getElementsByTagName(" nav ul li a");
    //     if(window.scrollY > 50){
    //         element.style.color ="#f8f8f8";
    //     }else{
    //         element.style.color = "transparent";
    //     }
    // }

   render(){
    return (
        
        <HideOnScroll >
        <nav className="nav" >
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <input type="checkbox" id="check1" />
        <label for="check1" className="checkbtn1">
          <i className="fas fa-bars" ></i>
        </label>
        <ul class="extra">
            <li>magazine</li>
            <li>company</li>
            <li>carrers</li>
            <li>foundation</li>
            <li>contacts</li>
        </ul>

       <Link to="/"> <label className="logo">Discovery</label></Link>
        <ul >
          <li><a  ><Link className="active" to="/" >About DLC</Link></a></li>
          <li><a><Link to="#">Our Worlds</Link></a></li>
          <li><a><Link to="/experience">Experiences</Link></a></li>
          <li><a><Link to="/gallery" >Gallery</Link></a></li>
          <li><a><Link to="#">Press</Link></a></li>
          <li><a><Link to="/contact">Contact</Link></a></li>
        </ul>
      </nav>
</HideOnScroll>
    )
}
}


