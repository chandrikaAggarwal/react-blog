//const { Component } = require("react");
import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="bg-success p-2 fixed-top position-fixed">
                <ul class="nav justify-content-end nav-pills">
                    <li class="nav-item">
                        <a class="nav-link text-white active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Blog</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;