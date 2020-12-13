import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faBars, faCircle, faPlus, faMapMarkerAlt, faRoute, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../../context/AuthContext';

export default function Navbar() {

    const [navbarShow, setNavbarShow] = useState(false);

    const { user, logout } = useAuthContext();

    const handleClickMenu = (e) => {
        const navbarMenu = document.getElementById('navbar-menu')
        const navbarBack = document.getElementById('navbar-back')

        e.preventDefault();
        setNavbarShow(!navbarShow)
        navbarMenu.classList.remove(navbarShow ? 'appy--navbar-menu-show' : 'appy--navbar-menu-hide')
        navbarMenu.classList.add(navbarShow ? 'appy--navbar-menu-hide' : 'appy--navbar-menu-show')
        navbarBack.classList.remove(navbarShow ? 'appy--navbar-menu-back-show' : 'appy--navbar-menu-back-hide')
        navbarBack.classList.add(navbarShow ? 'appy--navbar-menu-back-hide' : 'appy--navbar-menu-back-show')
    }

    return (
        <div>
            <div id="navbar-back" onClick={handleClickMenu} className="appy--navbar-menu-back">
            </div>
            <div id="navbar-menu" className="appy--navbar-menu">
                <img src="/img/logo-menu.svg" alt="Appy Hour Tours" />
                <ul>

                    <li><FontAwesomeIcon icon={faRoute} /><span><a href="/tours" id="tours">Tours</a></span></li>

                    <li><FontAwesomeIcon icon={faCircle} /><span><a href={`/record`}>Record Tour</a></span></li>
                    <li><FontAwesomeIcon icon={faPlus} /><span><a href={`/create`}>Create Tour</a></span></li>
                    <li><FontAwesomeIcon icon={faUser} /><span >Profile</span></li>
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} /><span><a href={`/nearby`}>Near Places</a></span></li>
                    <li><FontAwesomeIcon icon={faSignOutAlt} /><span className="last"><a onClick={logout}>Logout</a></span></li>
                </ul>
            </div>
            <nav className="appy--navbar">
                <Link to="" className="appy--navbar-brand" onClick={handleClickMenu}><FontAwesomeIcon icon={faBars} /></Link>

                <form className="appy--search-form">
                    <input className="appy--search-input" type="search" placeholder="Search Tours" aria-label="Search" />
                    <button className="appy--search-icon-location" type="submit"><FontAwesomeIcon icon={faSearchLocation} /></button>
                </form>
            </nav>
        </div >
    )
}