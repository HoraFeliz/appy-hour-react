import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../services/api-client';

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function CreateUser() {
	const [ state, setState ] = useState({
		data: {
			email: '',
			password: '',
			repeatPassword: ''
		},
		error: {
			email: true,
			password: true,
			repeatPassword: true
		},
		touch: {
			email: false,
			password: false,
			repeatPassword: false
		}
	});
	const [errorMessage, setErrorMessage] = useState(null)

	const history = useHistory();

	const validations = {
		email: (value) => EMAIL_PATTERN.test(String(value)),
		password: (value) => value.length > 8,
		repeatPassword: (value) => value === state.data.password
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		const isValid = validations[name](value);

		setState({
			data: {
				...state.data,
				[name]: value
			},
			error: {
				...state.error,
				[name]: !isValid
			},
			touch: {
				...state.touch
			}
		});
	};

	const handleBlur = (e) => {
		const { name } = e.target;
		setState({
			...state,
			touch: {
				...state.touch,
				[name]: true
			}
		});
	};

	const handleSubmit = () => {
		const doSignup = async () => {
			try {
				await createUser(state.data);
				history.push({
					pathname: '/login',
					state: { message: 'Activate account' }
				});
			} catch (e) {
				console.error(e);
				if (e.response) {
					console.log(e.response.data);
					setErrorMessage(e.response.data.message)
				}
			}
		};
		doSignup();
	};

	const { data, error, touch } = state;
	const isError = Object.values(error).some((el) => el);

	return (
		<div className="login-container">
			<form>
				<img src="/img/logo-appyhour-2.svg" alt="Appy Hour Tours" />
				{/* <h1>Sign up</h1> */}
				<div className="form-group">
					<input
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						value={data.email}
						type="text"
						required="required"
					/>
					<label htmlFor="input" className="control-label">
						Email
					</label>
					<i className="bar" />
					<div className="error appy--white-color">
						{error.email && touch.email ? 'Email is invalid' : ''}
					</div>
				</div>
				<div className="form-group">
					<input
						name="password"
						onBlur={handleBlur}
						onChange={handleChange}
						value={data.password}
						type="password"
						required="required"
					/>
					<label htmlFor="input" className="control-label">
						Password
					</label>
					<i className="bar" />
					<div className="error appy--white-color">
						{error.password && touch.password ? 'Password must be at leaster 9 characters' : ''}
					</div>
				</div>
				<div className="form-group">
					<input
						name="repeatPassword"
						onBlur={handleBlur}
						onChange={handleChange}
						value={data.repeatPassword}
						type="password"
						required="required"
					/>
					<label htmlFor="input" className="control-label">
						Repeat Password
					</label>
					<i className="bar" />
					<div className="error appy--white-color">
						{error.repeatPassword && touch.repeatPassword ? 'Passwords must be the same' : ''}
						{errorMessage && `${errorMessage}`}
					</div>
				</div>
			</form>
			<div className="button-container">
				<button disabled={isError} onClick={handleSubmit} type="button" className="button">
					<span>Sign Up</span>
				</button>
			</div>
		</div>
	);
}
