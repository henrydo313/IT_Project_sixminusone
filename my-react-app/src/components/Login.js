import React from "react";
import Layout from "./Layout";
import { useNavigate } from 'react-router-dom';
import "./CSS/login.css"


export default function Login() {

    function switchToLoginForm() {
        document.querySelector("#signup").classList.remove("hiddenForm");
        document.querySelector("#login").classList.add("hiddenForm");
    }

    function switchToSignupForm() {
        document.querySelector("#signup").classList.add("hiddenForm");
        document.querySelector("#login").classList.remove("hiddenForm");
    }

    function validateLogin() {
        // if() {
        //     document.querySelector("#errorMessage").classList.remove("hiddenError");
        //     return false;
        // }
    }

    function validateSignup() {
        const pwd = document.forms['signup']['passwordInput'].value;
        const confPwd = document.forms['signup']['passwordConfirmInput'].value;

        if (pwd !== confPwd) {
            alert("Passwords don't match");
            return false;
        }
    }

    // function to check if checkbox is checked

    const navigate = useNavigate();
    return (
        <Layout>
            <body>
                <div className="formBody">
                    <div className="formContainer">
                        <form action="" className="form" id="login">
                            <h1 className="formTitle">Login</h1>
                            <div className="errorMessage hiddenError">Incorrect username/password.</div>

                            <div className="inputBlock" id="usernameBlock">
                                <label for="usernameInput">Username</label>
                                <input type="text" className="formInput" id="usernameInput" placeholder="Enter username" autofocus/>
                            </div>

                            <div className="inputBlock" id="passwordBlock">
                                <label for="passwordInput">Password</label>
                                <input type="password" className="formInput" id="passwordInput" placeholder="Enter password"/>
                            </div>

                            <div className="checkboxBlock" id="rememberMeBlock">
                                <input type="checkbox" id="rememberMe"/>
                                <label for="rememberMe">Remember Me</label>
                            </div>

                            <div className="buttonContainer">
                                <input type="submit" className="formButton" id="loginButton" value="Login" onClick={() => validateLogin()}/>
                            </div>
                            <div className="linkContainer">
                                <a href="" id="forgotPasswordLink" onClick={() => navigate("/forgot password")}>Forgot password?</a>
                            </div>

                            <div className="switchForm">
                                <hr></hr>
                                <p>Don't have an account?</p>
                                <input type="button" className="formButton switchToSignup" value="Sign Up" onClick={() => switchToLoginForm()}/>
                            </div>
                        </form>


                        <form action="" className="form hiddenForm" id="signup" onsubmit="return validateForm()">
                            <h1 className="formTitle">Sign Up</h1>

                            <div className="inputBlock" id="emailBlock">
                                <label for="emailInput">Email</label>
                                <input type="email" className="formInput" id="emailInput" placeholder="Enter email" autofocus required/>
                            </div>

                            <div className="inputBlock" id="usernameBlock">
                                <label for="usernameInput">Username</label>
                                <input type="text" className="formInput" id="usernameInput" placeholder="Enter username" required/>
                            </div>

                            <div className="inputBlock" id="passwordBlock">
                                <label for="passwordInput">Password</label>
                                <input type="password" className="formInput" id="passwordInput" placeholder="Enter password" required/>
                            </div>

                            <div className="inputBlock" id="passwordConfirmBlock">
                                <label for="passwordInput">Confirm password</label>
                                <input type="password" className="formInput" id="passwordConfirmInput" placeholder="Re-enter password" required/>
                            </div>

                            <div className="buttonContainer">
                                <input type="submit" className="formButton" id="signupButtom" value="Sign Up" onClick={() => validateSignup()}/>
                            </div>

                            <div className="switchForm">
                                <hr></hr>
                                <p>Already have an account?</p>
                                <input type="button" className="formButton switchToLogin" value="Login" onClick={() => switchToSignupForm()}/>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </Layout>
    )
}