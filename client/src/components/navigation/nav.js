import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './nav.css';

class Nav extends Component{
    render(){
        return(
            <nav className='navigation'>
            <h3>List of API Clients</h3>
            
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tweeting'>Post Tweet</Link></li>
                <li><Link to='/keyword'>Search</Link></li>
            </ul>
          </nav>
        )
    }
}

export default Nav;