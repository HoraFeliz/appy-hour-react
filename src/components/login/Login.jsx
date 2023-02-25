// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { loginGoogle, loginUser } from '../../services/api-client';

export default function Login(props) {
	const history = useHistory();
	const { login } = useAuthContext();
	const [ state, setState ] = useState({
		email: '',
		password: '',
		remember: false
	});
	const [ errorMessage, setErrorMessage ] = useState(null);

	const responseGoogle = (userGoogle) => {
		const doLoginGoogle = async () => {
			try {
				const userLogin = await loginGoogle(userGoogle);
				login(userLogin, true);
				history.push('/');
			} catch (e) {
				setErrorMessage('Failed to Google login')
			}
		};
		doLoginGoogle();
	};

	const handleChange = (e) => {
		const { name} = e.target;
		const value = name === 'remember' ? e.target.checked : e.target.value;

		setState({
			...state,
			[name]: value
		});
	};

	const handleSubmit = () => {
		const doLogin = async () => {
			try {
				const userLogin = await loginUser(state);
				login(userLogin, state.remember);
				history.push('/');
			} catch (e) {
				if (e.response) {
					setErrorMessage(e.response.data.message);
				}
			}
		};
		doLogin();
	};

	return (
		<div className="login-container">
			<form>
				<img src="/img/logo-appyhour-2.svg" alt="Appy Hour Tours" />
				{/* <h1>Login</h1> */}
				<div className="form-group">
					<input name="email" onChange={handleChange} value={state.name} type="email" required="required" />
					<label htmlFor="input" className="control-label">
						User
					</label>
					<i className="bar" />
				</div>
				<div className="form-group">
					<input
						name="password"
						onChange={handleChange}
						value={state.password}
						type="password"
						required="required"
					/>
					<label htmlFor="input" className="control-label">
						Password
					</label>
					<i className="bar" />
				</div>

				<div className="checkbox">
					<label>
						<input type="checkbox" name="remember" onChange={handleChange} />
						<i className="helper" />
						<span className="appy--white-color"> Remember</span>
					</label>
				</div>
				<div className="appy--white-color">
					{props.location.state?.message !== undefined && <div>{`${props.location.state.message}`}</div>}
					{errorMessage && `${errorMessage}`}
				</div>
			</form>

			<div className="button-container">
				<button onClick={handleSubmit} type="button" className="button">
					<span>Log In</span>
				</button>
			</div>
			<div className="button-container">
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE}
					render={(renderProps) => (
						<button type="button" onClick={renderProps.onClick} className="button">
							<img className="google-brand" src="/img/google-brands.svg" alt="" />
							<span>Google Login</span>
						</button>
					)}
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					isSignedIn={true}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
			<div className="link-container">
				<div className="appy--white-color">Forgot password?</div>
				<NavLink to="/signup" className="appy--white-color">
					Create an Account
				</NavLink>
			</div>
		</div>
	);
}
