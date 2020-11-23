import React, { Component } from 'react';

import Home from './HomeComponent'
import Blog from './blogComponent';
import FormPractise from './FormComponent';

import { Switch, Route } from 'react-router-dom';
import '../master.css';

class Main extends Component {
    render() {
        return (
            <div className="pt-5">
                <Switch>
                    <Route path="/" component={Home} exact />
                    {/* <Route path="/about" component={Home} exact />
                        <Route path="/contact-us" component={Home} exact /> */}
                    <Route path="/blog" component={Blog} exact />
                    <Route path="/form-practise" component={FormPractise} exact />
                </Switch>
            </div>
        );
    }
}

export default Main;