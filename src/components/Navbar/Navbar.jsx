import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className="appy--navbar">
            <Link className="appy--navbar-brand" to="/tours"><FontAwesomeIcon icon={faBars} /></Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <form className="appy--search-form">
                <input className="appy--search-input" type="search" placeholder="Search Tours" aria-label="Search" />
                <button className="appy--search-icon-location" type="submit"><FontAwesomeIcon icon={faSearchLocation} /></button>
            </form>
        </nav>
    )
}

export default Navbar