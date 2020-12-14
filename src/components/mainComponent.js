import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../master.css';

import Home from './HomeComponent';
import Blog from './blogComponent';
import FormPractise from './FormComponent';
import ErrorBoundaryComponent from './ErrorBoundaryComponent';
import Callback from './Callback';
import Auth from '../Auth/Auth';
import Profile from './ProfileComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className='pt-5'>
        <ErrorBoundaryComponent>
                <Switch>
                    <Route path='/' render={props => <Home {...props} />} exact />
                    <Route path='/callback' render={props=> <Callback auth={this.props.auth} {...props} />} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/profile' render={props=> <Profile auth={this.props.auth} {...props} />} />
                    <Route path='/form-practise' component={FormPractise} />
                </Switch>
        </ErrorBoundaryComponent>
      </div>
    );
  }
}

export default Main;
