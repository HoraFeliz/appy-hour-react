import React, { Component } from 'react'
import './Login.scss'

export default class Login extends Component {
    render() {
        return (

            <div class="login-container">
                <form>
                    <h1>Login</h1>
                    <div class="form-group">
                        <input type="text" required="required" />
                        <label for="input" class="control-label">User</label><i class="bar"></i>
                    </div>
                    <div class="form-group">
                        <input type="password" required="required" />
                        <label for="input" class="control-label">Password</label><i class="bar"></i>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" /><i class="helper"></i>Remember
                        </label>
                    </div>

                </form>
                <div class="button-container">
                    <button type="button" class="button"><span>Submit</span></button>
                </div>
            </div>
        )
    }
}
