import React, { Component } from 'react'

import '../master.css';
import landingPage from '../img/landing-page.jpg';

class Footer extends Component {
    render() {
        return (
            <div className="landing-page-img">
                <img className="img-fluid" src={landingPage} alt="" />
            </div>
        );
    }
}

export default Footer;