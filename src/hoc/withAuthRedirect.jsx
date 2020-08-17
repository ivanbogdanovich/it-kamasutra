
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component) => {
    class RenderComponent extends React.Component {

        render() {

            if(!this.props.isAuth) {
                return <Redirect to='login'/>
            }

            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirected = connect(mapStateToPropsForRedirect)(RenderComponent);

    return ConnectedAuthRedirected;
}
