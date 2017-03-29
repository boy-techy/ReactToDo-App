/**
 * Created by Yatindra on 3/27/2017.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../content/Navbar.css';
import LogIn from './LogIn'
export default class Navbar extends React.Component{


    render(){
        return(
          <div style={{height:'30px', backgroundColor:'brown'}}>

              <ul id="navBar">
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/about" >AboutUs</Link></li>
                  {
                      this.props.authentic?
                          <span></span>
                              :
                          <LogIn isValid={this.props.isValid} />
                  }
                  <li><span id="errorMessage">{this.props.message}</span></li>
              </ul>
          </div>
        );
    }
}