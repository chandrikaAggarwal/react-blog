import auth0 from 'auth0-js';

export default class Auth{
    constructor(history) {
        this.history = history;
        this.profileData = null;
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            responseType: 'token id_token',
            scope: 'openid profile email'
        });
    }

    login = () => {
        this.auth0.authorize();
    };

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            this.setSession(authResult);
            // TODO: Fix: this.history.push("/") is giving undefined error
            this.history = '/';


            // TODO: Fix error "State does not match"
            // if (authResult && authResult.accessToken && authResult.idToken) {
            //     this.setSession(authResult);
            // } else if(err) {
            //     console.log(err);
            //     throw new Error('Authentication error: Check console for further details');
            // }
        });
    };

    setSession = authResult => {
        if (authResult) {
            const expiresAt = JSON.stringify(
                authResult.expiresAt * 1000 + new Date().getTime()
            );

            localStorage.setItem('expires_at', expiresAt);
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
        } else {
            localStorage.setItem('expires_at', (new Date().getTime() + (60*60 * 1000)));
            localStorage.setItem('access_token', 'accTkn');
            localStorage.setItem('id_token', 'idTkn');
        }

        
    };

    isAuthenticated = () => {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    logout = () => {
        localStorage.removeItem('expires_at');
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        this.profileData = null;

        // To logout from auth0 server
        this.auth0.logout({
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            returnTo: 'http://localhost:3000/'
        });
    }

    getAccessToken = () => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            //throw new Error("Access token not found")
            return ''
        }
        
        return accessToken;
    }

    getProfile = cb => {
        if (this.profileData) return cb(this.profileData);
        this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
            if (profile) this.profileData = profile;
            cb(profile, err);
        });
    }
}