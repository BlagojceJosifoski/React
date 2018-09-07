import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class SideNavigation extends Component {
  render() {
    return (
        <div className="side_menu">
            <ul>
                <h1>LOGO</h1>
                
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/report">Report</Link></li>
                
            </ul>
</div>
    );
  }
}

export default SideNavigation;

