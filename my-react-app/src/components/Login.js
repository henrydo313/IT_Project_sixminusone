import Layout from "./Layout";
import "./CSS/login.css"


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector(".switchToSignup").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hiddenForm");
        signupForm.classList.remove("hiddenForm");
    })

    document.querySelector(".switchToLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hiddenForm");
        signupForm.classList.add("hiddenForm");
    })
})


export default function Login() {

    function something() {}
    
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
                                <input type="submit" className="formButton" id="loginButton" value="Login"/>
                            </div>
                            <div className="linkContainer">
                                <a href="ForgotPass.html" id="forgotPasswordLink">Forgot password?</a>
                            </div>

                            <div className="switchForm">
                                <hr></hr>
                                <p>Don't have an account?</p>
                                <input type="button" className="formButton switchToSignup" value="Sign Up" onClick={() => something()}/>
                            </div>
                        </form>


                        <form action="" className="form hiddenForm" id="signup" onsubmit="return validateForm()">
                            <h1 className="formTitle">Sign Up</h1>

                            <div className="inputBlock" id="emailBlock">
                                <label for="emailInput">Email</label>
                                <input type="email" className="formInput" id="emailInput" placeholder="Enter email" autofocus/>
                            </div>

                            <div className="inputBlock" id="usernameBlock">
                                <label for="usernameInput">Username</label>
                                <input type="text" className="formInput" id="usernameInput" placeholder="Enter username"/>
                            </div>

                            <div className="inputBlock" id="passwordBlock">
                                <label for="passwordInput">Password</label>
                                <input type="password" className="formInput" id="passwordInput" placeholder="Enter password"/>
                            </div>

                            <div className="inputBlock" id="passwordConfirmBlock">
                                <label for="passwordInput">Confirm password</label>
                                <input type="password" className="formInput" id="passwordConfirmInput" placeholder="Re-enter password"/>
                            </div>

                            <div className="buttonContainer">
                                <input type="submit" className="formButton" id="signupButtom" value="Sign Up"/>
                            </div>

                            <div className="switchForm">
                                <hr></hr>
                                <p>Already have an account?</p>
                                <input type="button" className="formButton switchToLogin" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </Layout>
    )
}