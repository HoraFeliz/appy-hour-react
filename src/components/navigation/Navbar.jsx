import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearchLocation,
	faBars,
	faCircle,
	faPlus,
	faMapMarkerAlt,
	faRoute,
	faSignOutAlt,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../../context/AuthContext';
import { logOut } from '../../services/api-client';
import { TourItemSlide } from '../helpers/TourItemSlide';
import { TourItemFocus } from '../helpers/TourItemFocus';
import { GoogleLogout } from 'react-google-login';

export default function Navbar() {
	const [navbarShow, setNavbarShow] = useState(false);

	const { user, logout } = useAuthContext();

	// localStorage.getItem('beerHelp') === 'active' ? localStorage.setItem('beerHelp', 'active') : localStorage.setItem('beerHelp', 'hide');


	const handleClickMenu = (e) => {
		const navbarMenu = document.getElementById('navbar-menu');
		const navbarBack = document.getElementById('navbar-back');

		e.preventDefault();
		setNavbarShow(!navbarShow);
		navbarMenu.classList.remove(navbarShow ? 'appy--navbar-menu-show' : 'appy--navbar-menu-hide');
		navbarMenu.classList.add(navbarShow ? 'appy--navbar-menu-hide' : 'appy--navbar-menu-show');
		navbarBack.classList.remove(navbarShow ? 'appy--navbar-menu-back-show' : 'appy--navbar-menu-back-hide');
		navbarBack.classList.add(navbarShow ? 'appy--navbar-menu-back-hide' : 'appy--navbar-menu-back-show');
	};

	const handleLogOut = () => {
		const logOutUser = async () => {
			try {
				await logOut();
				logout();
			} catch (e) {
				console.error(e)
			}
		};

		logOutUser();
	};

	const handleViewAgain = () => {
		localStorage.setItem('tourItem', 'active');
	}

	return (
		<div>
			<div id="navbar-back" onClick={handleClickMenu} className="appy--navbar-menu-back" />
			<div id="navbar-menu" className="appy--navbar-menu">
				<img src="/img/logo-menu.svg" alt="Appy Hour Tours" />
				<ul>
					<li>
						<FontAwesomeIcon icon={faRoute} />
						<span>
							<a href="/tours" id="tours">
								Rutas
							</a>
						</span>
					</li>

					<li>
						<FontAwesomeIcon icon={faCircle} />
						<span>
							<a href={`/record`}>Grabar Ruta</a>
						</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faPlus} />
						<span>
							<a href={`/create`}>Crear Ruta</a>
						</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faUser} />
						<span>Perfil</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faMapMarkerAlt} />
						<span>
							<a href={`/nearby`}>Near Places</a>
						</span>
					</li>
	
						<GoogleLogout
							clientId={process.env.REACT_APP_GOOGLE}
							buttonText="Logout"
							onLogoutSuccess={logout}
							render={(renderProps) => (
								<li onClick={renderProps.onClick}>
									<FontAwesomeIcon icon={faSignOutAlt} />
									<span className="last">
									<span>Log out</span>
									</span>
					
								</li>
							)}
							>
							</GoogleLogout>
				</ul>
			</div>
			<nav id="appy--navbar" className="appy--navbar">
				<Link to="" className="appy--navbar-brand" onClick={handleClickMenu}>
					<FontAwesomeIcon icon={faBars} />
				</Link>

				<form className="appy--search-form">
					<input
						id="appy--search-form-input"
						className={localStorage.getItem('beerHelp') === 'hide' ? "appy--search-input" : "appy--search-input appy--search-input-help"}
						type="search"
						placeholder="Buscar Rutas"
						aria-label="Search"
					/>
					<button className="appy--search-icon-location" type="submit">
						<FontAwesomeIcon icon={faSearchLocation} />
					</button>

				</form>
				<NavLink to="/tours/"><img id="appy--navbar-help-beer-viewagain" className={localStorage.getItem('beerHelp') === 'hide' ? "appy--navbar-help-beer-viewagain d-none" : "appy--navbar-help-beer-viewagain d-flex"} src="/img/view-again.svg" onClick={handleViewAgain} /></NavLink>
				<div id="appy--navbar-help-beer" className={localStorage.getItem('beerHelp') === 'hide' ? "appy--navbar-help-beer d-none" : "appy--navbar-help-beer d-flex"}>
					<img className="appy--navbar-help-beer-img" src="/img/help-beer.png" />
				</div>

			</nav>
		</div>
	);
}
