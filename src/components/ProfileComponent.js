import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            profile: null,
            err: ''
        }
    }

    componentDidMount() {
        this.loadProfileData();
    }

    loadProfileData = () => {
        this.props.auth.getProfile((profile, error) => {
            this.setState({ profile, error });
        });
    }

    render() {
        const { profile } = this.state;
        if (!profile) return <Redirect to="/" />
        
        // TODO: Not working as of now due to "State does not match" error
        return <>
            <h1>My Profile</h1>
            <div>
                {JSON.stringify(profile, null, 2)}
            </div>
        </>
    }
}

export default Profile;