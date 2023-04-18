import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Style.css";

function Register() {
    return (
        <div>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <Link to="/Login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register