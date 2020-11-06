import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faBars, faCircle, faPlus, faUser, faMapMarkerAlt, faRoute } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

    state = {
        navbarShow: false
    }

    handleClickMenu = (e) => {
        const navbarMenu = document.getElementById('navbar-menu')
        const navbarBack = document.getElementById('navbar-back')

        e.preventDefault();
        this.setState({ navbarShow: !this.state.navbarShow })
        navbarMenu.classList.remove(this.state.navbarShow ? 'appy--navbar-menu-show' : 'appy--navbar-menu-hide')
        navbarMenu.classList.add(this.state.navbarShow ? 'appy--navbar-menu-hide' : 'appy--navbar-menu-show')
        navbarBack.classList.remove(this.state.navbarShow ? 'appy--navbar-menu-back-show' : 'appy--navbar-menu-back-hide')
        navbarBack.classList.add(this.state.navbarShow ? 'appy--navbar-menu-back-hide' : 'appy--navbar-menu-back-show')
    }

    handleMenuTarget = (e) => {
        console.log(e.target);
    }

    handleClickClose = (e) => {
        const navbarMenu = document.getElementById('navbar-menu')
        e.preventDefault();
        navbarMenu.classList.add('appy--navbar-menu-hide')
        navbarMenu.classList.remove('appy--navbar-menu-show')
        this.setState({ navbarShow: false })
    }

    render() {
        return (
            <div>
                <div id="navbar-back" onClick={this.handleClickMenu} className="appy--navbar-menu-back">
                </div>
                <div id="navbar-menu" onClick={this.handleMenuTarget} className="appy--navbar-menu">
                    <img src="/img/logo-menu.svg" alt="Appy Hour Tours" />
                    <ul>

                        <li><FontAwesomeIcon icon={faRoute} /><span><a href={`/tours`}>Tours</a></span></li>

                        <li><FontAwesomeIcon icon={faCircle} /><span><a href={`/record`}>Record Tour</a></span></li>
                        <li><FontAwesomeIcon icon={faPlus} /><span><a href={`/create`}>Create Tour</a></span></li>
                        {/* <li><FontAwesomeIcon icon={faUser} /><span >Profile</span></li> */}
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /><span className="last"><a href={`/nearby`}>Near Places</a></span><span className="last beta">Beta</span></li>
                    </ul>
                </div>
                <nav className="appy--navbar">
                    <Link className="appy--navbar-brand" onClick={this.handleClickMenu}><FontAwesomeIcon icon={faBars} /></Link>

                    <form className="appy--search-form">
                        <input className="appy--search-input" type="search" placeholder="Search Tours" aria-label="Search" />
                        <button className="appy--search-icon-location" type="submit"><FontAwesomeIcon icon={faSearchLocation} /></button>
                    </form>
                </nav>
            </div>
        )
    }

}


export default Navbar