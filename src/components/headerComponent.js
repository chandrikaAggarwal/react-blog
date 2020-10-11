//const { Component } = require("react");
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="bg-success p-2 fixed-top position-fixed">
                <ul className="nav justify-content-end nav-pills">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" activeClassName="active" to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" activeClassName="active" to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;