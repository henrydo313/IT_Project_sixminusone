import React from "react";
import Layout from "./Layout";
import { useNavigate } from 'react-router-dom';
import styles from "./CSS/login.module.css";


export default function Login() {

    function switchToLoginForm() {
        document.querySelector("#signup").classList.remove(styles.hiddenForm);
        document.querySelector("#login").classList.add(styles.hiddenForm);
    }

    function switchToSignupForm() {
        document.querySelector("#signup").classList.add(styles.hiddenForm);
        document.querySelector("#login").classList.remove(styles.hiddenForm);
    }

    function validateLogin() {
        // if() {
        //     document.querySelector("#errorMessage").classList.remove({styles.hiddenError});
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

                <div className={styles.formBody}>
                    <div className={styles.formContainer}>
                        <form action="" className={styles.form} id="login">
                            <h1 className={styles.formTitle}>Login</h1>
                            <div className={styles.errorMessage + ' ' + styles.hiddenError}>Incorrect username/password.</div>

                            <div className={styles.inputBlock} id="usernameBlock">
                                <label>Username</label>
                                <input type="text" className={styles.formInput + ' ' + styles.usernameInput} placeholder="Enter username" autoFocus/>
                            </div>

                            <div className={styles.inputBlock} id="passwordBlock">
                                <label>Password</label>
                                <input type="password" className={styles.formInput + ' ' + styles.passwordInput} placeholder="Enter password"/>
                            </div>

                            <div className={styles.checkboxBlock} id="rememberMeBlock">
                                <input type="checkbox" id="rememberMe"/>
                                <label>Remember Me</label>
                            </div>

                            <div className={styles.buttonContainer}>
                                <input type="submit" className={styles.formButton} id="loginButton" value="Login" onClick={() => validateLogin()}/>
                            </div>
                            <div className={styles.linkContainer}>
                                <div id={styles.forgotPasswordLink} onClick={() => navigate("/forgotPassword")}>Forgot password?</div>
                            </div>

                            <div className={styles.switchForm}>
                                <hr></hr>
                                <p>Don't have an account?</p>
                                <input type="button" className={styles.formButton + ' ' + styles.switchToSignup} value="Sign Up" onClick={() => switchToLoginForm()}/>
                            </div>
                        </form>


                        <form action="" className={styles.form + ' ' + styles.hiddenForm} id="signup">
                            <h1 className={styles.formTitle}>Sign Up</h1>

                            <div className={styles.inputBlock} id="nameBlock">
                                <label>Full name</label>
                                <input type="text" className={styles.formInput + ' ' + styles.nameInput} placeholder="Enter name" autofocus required/>
                            </div>

                            <div className={styles.inputBlock} id="emailBlock">
                                <label>Email</label>
                                <input type="email" className={styles.formInput + ' ' + styles.emailInput} placeholder="Enter email" autofocus required/>
                            </div>

                            <div className={styles.inputBlock} id="usernameBlock">
                                <label>Username</label>
                                <input type="text" className={styles.formInput + ' ' + styles.usernameInput} placeholder="Enter username" required/>
                            </div>

                            <div className={styles.inputBlock} id="passwordBlock">
                                <label>Password</label>
                                <input type="password" className={styles.formInput + ' ' + styles.passwordInput} placeholder="Enter password" required/>
                            </div>

                            <div className={styles.inputBlock} id={styles.passwordConfirmBlock}>
                                <label>Confirm password</label>
                                <input type="password" className={styles.formInput + ' ' + styles.passwordConfirmInput} placeholder="Re-enter password" required/>
                            </div>

                            <div className={styles.buttonContainer}>
                                <input type="submit" className={styles.formButton} id="signupButtom" value="Sign Up" onClick={() => validateSignup()}/>
                            </div>

                            <div className={styles.switchForm}>
                                <hr></hr>
                                <p>Already have an account?</p>
                                <input type="button" className={styles.formButton + ' ' + styles.switchToLogin} value="Login" onClick={() => switchToSignupForm()}/>
                            </div>
                        </form>
                    </div>
                </div>

        </Layout>
    )
}