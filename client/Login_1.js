document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector(".switchToSignup").addEventListener("click", () => {
        loginForm.classList.add("hiddenForm");
        signupForm.classList.remove("hiddenForm");
    })

    document.querySelector(".switchToLogin").addEventListener("click", () => {
        loginForm.classList.remove("hiddenForm");
        signupForm.classList.add("hiddenForm");
    })
})