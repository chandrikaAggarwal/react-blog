import React, { Component } from 'react';
import Blog from './blogComponent';

import '../master.css';

class Main extends Component {
    render() {
        return (
            <div className="pt-5">
                <Blog />
            </div>
        );
    }
}

export default Main;