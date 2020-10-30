import React, { Component } from 'react'
import './LoginLogic'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <h2>login</h2>
                <form>
                    <input type="text" className="email" placeholder="email" />
                    <br />
                    <input type="text" className="pwd" placeholder="password" />
                </form>
                <a href="#" className="link">
                    forgot your password ?
                </a>
                <br />
                <button className="register">
                    <span>register</span>
                </button>
                <button className="signin">
                    <span>sign in</span>
                </button>
                <h3>your registration is complete !    </h3>
                <h3>your sign in is complete !</h3>
                <div className="reg"></div>
                <div className="sig"></div>
            </div>
        )
    }
}
