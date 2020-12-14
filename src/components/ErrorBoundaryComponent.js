import React from 'react';

class ErrorBoundaryComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        //logErrorToMyService(error, info);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error boundary caught error!!</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundaryComponent;