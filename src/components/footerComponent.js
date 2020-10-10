import React, { Component } from 'react'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div className="bg-success p-2 fixed-bottom position-fixed">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;