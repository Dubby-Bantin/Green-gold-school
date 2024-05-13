const passwordInput = document.querySelectorAll(".password");
const showPassword = document.querySelectorAll(".show-password");

passwordInput.forEach((password) => {
    showPassword.forEach((eye) => {
        eye.addEventListener("click", () => {
        password.type === "password"
            ? (password.type = "text")
            : (password.type = "password");
        });
    });
});
