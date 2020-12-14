import React from 'react';

class Callback extends React.Component{
    componentDidMount() {
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.history.push('/');
            this.props.auth.handleAuthentication();
        } else {
            throw new Error("Invalid callback URL");
        }
    }

    render() {
        return <h3>Loading ...</h3>
    }
}

export default Callback;