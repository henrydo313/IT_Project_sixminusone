import Layout from './Layout';
// import "./CSS/forgotPassword.css";

export default function ForgotPassword() {
    return (
        <Layout>
            <div class="formBody">
                <div class="formContainer">
                    <form action="" class="form" id="forgotPass">
                        <h1>Forgot Password</h1>
                        <div class="instructions">
                            Please enter the email associated with your account 
                            and we'll send an email with instructions to reset your password.
                        </div>
            
                        <div class="inputBlock">
                            <input type="email" id="emailInput" class="formInput" placeholder="Email address"/>
                        </div>
            
                        <div class="buttonContainer">
                            <input type="button" class="formButton" id="sendEmailButton" value="Send email"/>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}