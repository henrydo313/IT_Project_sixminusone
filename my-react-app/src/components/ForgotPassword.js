import Layout from './Layout';
import styles from "./CSS/forgotPassword.module.css";

export default function ForgotPassword() {
    return (
        <Layout>
            <div className={styles.formBody}>
                <div className={styles.formContainer}>
                    <form action="" className="form" id="forgotPass">
                        <div className={styles.formTitle}>Forgot Password</div>
                        <div className={styles.instructions}>
                            Please enter the email associated with your account 
                            and we'll send an email with instructions to reset your password.
                        </div>
            
                        <div className={styles.inputBlock}>
                            <input type="email" className={styles.formInput + ' ' + styles.emailInput} placeholder="Email address"/>
                        </div>
            
                        <div className={styles.buttonContainer}>
                            <input type="button" className={styles.formButton} id="sendEmailButton" value="Send email"/>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}