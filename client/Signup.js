function validateForm() {
    const pwd = document.forms['signupForm']['passwordInput'].value;
    const confPwd = document.forms['signupForm']['passwordConfirmInput'].value;

    if (pwd != confPwd) {
        alert("Passwords don't match");
        return false;
    }
}