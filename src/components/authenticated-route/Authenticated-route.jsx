import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import DefaultLayout from '../layouts/DefaultLayout';

const RedirectToLogin = () => <Redirect to="/login" />;
const RedirectToHome = () => <Redirect to="/" />;

export const AuthenticatedRoute = (props) => {
	const { user } = useAuthContext();
	return (
		<DefaultLayout>
			<Route {...props} component={user ? props.component : RedirectToLogin} />
		</DefaultLayout>
	);
};

export const NotAuthenticatedRoute = (props) => {
	const { user } = useAuthContext();
	return <Route {...props} component={user ? RedirectToHome : props.component} />;
};
