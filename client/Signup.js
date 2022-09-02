function validateForm() {
    const pass1 = document.forms["signupForm"]["password"];
    const pass2 = document.forms["signupForm"]["confPassword"];
    
    if (pass1 != pass2) {
        alert("Passwords need to be the same");
        return false;
    }
}