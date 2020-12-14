//const { Component } = require("react");
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;

        return (
            <div className="bg-success p-2 fixed-top position-fixed">
                <ul className="nav justify-content-end nav-pills">
                    {isAuthenticated() ?
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" activeClassName="active" to="/" exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" activeClassName="active" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" activeClassName="active" to="/profile">Profile</NavLink>
                            </li>
                            <li>&nbsp;|&nbsp; <button className="btn btn-outline-light" onClick={logout}>Log-out</button></li>
                        </>
                    :
                        <li><button className="btn btn-light" onClick={login}>Log-in</button></li>
                    }
                </ul>
            </div>
        );
    }
}

export default Header;