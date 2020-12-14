import React, { Component } from 'react';

import '../master.css';

import Header from '../components/headerComponent';
import Footer from '../components/footerComponent';
import Main from '../components//mainComponent';
import Auth from '../Auth/Auth';

class HomeLayout extends Component {
    constructor(props) {
        super(props);
        this.auth = new Auth(this.props.history);
    }

    render() {
        return (
            <div className="container-fluid pr-0 pl-0 position-relative">
                <Header auth={this.auth} />
                <Main auth={this.auth} />
                <Footer />
            </div>
        );
    }
}

export default HomeLayout;