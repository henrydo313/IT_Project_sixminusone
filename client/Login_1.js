// function validateForm() {
//     const pwd = document.forms['#signup']['#passwordInput'].value;
//     const confPwd = document.forms['#signup']['#confirmPasswordInput'].value;

//     if (pwd != confPwd) {
//         alert("Passwords don't match");
//         return false;
//     }
// }

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