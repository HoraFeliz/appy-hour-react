import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className="appy--navbar">
            <Link className="appy--navbar-brand"><FontAwesomeIcon icon={faBars} /></Link>

            <form className="appy--search-form">
                <input className="appy--search-input" type="search" placeholder="Search Tours" aria-label="Search" />
                <button className="appy--search-icon-location" type="submit"><FontAwesomeIcon icon={faSearchLocation} /></button>
            </form>
        </nav>
    )
}

export default Navbar