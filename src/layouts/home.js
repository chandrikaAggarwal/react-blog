import React, { Component } from 'react';

import Header from '../components/headerComponent';
import Footer from '../components/footerComponent';
import Main from '../components//mainComponent';

import '../master.css';

class HomeLayout extends Component {
    render() {
        return (
            <div className="container-fluid pr-0 pl-0 position-relative">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default HomeLayout;