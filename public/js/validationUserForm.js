

function validateForm() {

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const avatarInput = document.getElementById("avatar");




    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");
    const errorEmail = document.getElementById("errorEmail");
    const errorAvatar = document.getElementById("errorAvatar");

    // resetErrors([username, password, email, avatar],
    //     [errorUsername, errorPassword]);

    let valid = true;

    if (!checkRequired(usernameInput.value)) {
        valid = false;

        usernameInput.classList.add("error-input");
        errorUsername.innerText = "Pole jest wymagane";
    } else if (!checkTextLenghtRanga(usernameInput.value, 2, 30)) {
        valid = false;

        usernameInput.classList.add("error-input");
        errorUsername.innerText = "Pole powinno zawierać od 3 do 30 znaków";
    }
    //
    if (!checkRequired(passwordInput.value)) {
        valid = false;

        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Pole jest wymagane";
    } else if (!checkTextLenghtRanga(passwordInput.value, 6)) {
        valid = false;

        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Hasło musi mieć conajmniej 6 znaków";
    }
    //
    if (!checkRequired(emailInput.value)) {
        valid = false;

        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLenghtRanga(emailInput.value, 5, 50)) {
        valid = false;

        emailInput.classList.add("error-input");
        errorEmail.innerText = "Hasło musi mieć conajmniej 6 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;

        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}