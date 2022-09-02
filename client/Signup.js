function validateForm() {
    const pwd = document.forms['signupForm']['password'].value;
    const confPwd = document.forms['signupForm']['confPassword'].value;

    if (pwd != confPwd) {
        alert("Passwords don't match");
        return false;
    }
}