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

                <div className={styles.formBody}>
                    <div className={styles.formContainer}>
                        <form action="" className="form" id="login">
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


                        <form action="{% url 'insertusers' %}" method="post">
                            <h1 className={styles.formTitle}>Sign Up</h1>

                            <div className={styles.inputBlock} id="emailBlock">
                                <label>Email</label>
                                
                            </div>

                            <div className={styles.inputBlock} id="usernameBlock">
                                <label>Username</label>
                                <input type="text" name="name"/>
                            </div>

                            <div className={styles.inputBlock} id="passwordBlock">
                                <label>Password</label>
                                <input type="text" name="age"/>
                            </div>

                            <div className={styles.inputBlock} id={styles.passwordConfirmBlock}>
                                <label>Confirm password</label>
                                <input type="text" name="phone"/>
                            </div>

                            <td colspan="2" align="center">
                                <input type="submit" value="Add"/>
                                <input type="reset" value="Reset"/>
                            </td>

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