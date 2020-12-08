import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const RedirectToLogin = () => <Redirect to="/login" />;
const RedirectToHome = () => <Redirect to="/" />;


export const AuthenticatedRoute = (props) => {
    console.log('hola')
    const { user } = useAuthContext();
	return <Route {...props} component={user ? props.component : RedirectToLogin} />;
};

export const NotAuthenticatedRoute = (props) => {
    const { user } = useAuthContext();
	return <Route {...props} component={user ? RedirectToHome : props.component} />;
};
