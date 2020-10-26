import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarMenu() {
    return (
        <div >
            <ul className="navbar-nav mr-auto" style={{ display: 'none' }}>
                <li className="nav-item active">
                    <Link className="nav-link" to="/tours">Tours <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/record">Record Tour</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Create Tour</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/options">Options</Link>
                </li>
            </ul>
        </div>
    )
}
