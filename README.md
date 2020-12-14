# React Login and Blog 

### Steps to implement Auth0

1. Download the required dependencies using command -
```
npm install auth0-js@9.13.4 auth0-lock@11.25.1 express@4.17.1 express-jwt@5.3.1 express-jwt-authz@1.0.0 jwks-rsa@1.3.0 npm-run-all@4.1.5 react-router-dom@5.2.0
```
2. SignUp at [Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22docs%22%7D)
	- Add a new application in it
	- Update _Allowed Callback URLs_ in "Settings"
3. Update _.env_ with Auth0 Settings 
4. Create Auth object in "root/src/Auth"