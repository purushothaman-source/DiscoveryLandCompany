import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom'
import Dashboard from '../src/components/DashBoard/Dashboard'
import Gallery from '../src/components/Gallery/gallery'
import Contact from '../src/components/Contacts/contacts'
import Experience from '../src/components/Experiences/Experiences'
import Appbarmui from '../src/components/AppbarMui/Appbarmui'
const Routing =(
  <Router>
    <div>
       <Route  exact path="/" component={Dashboard} ></Route>
       <Route path="/gallery" component={Gallery} ></Route>
       <Route path="/contact" component={Contact} ></Route>
       <Route path="/experience" component={Experience} ></Route>
    </div>
  </Router>
)
ReactDOM.render(
   Routing,
  document.getElementById('root')
);

