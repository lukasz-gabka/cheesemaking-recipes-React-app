const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validateLogin = (email, password) => {
    validateEmailFormat(email);
    validatePasswordLength(password);
}

export const validateRegister = (email, name, password, confirmPassword) => {
    validateEmailFormat(email);
    validateNameLength(name);
    validatePasswordLength(password);
    validateConfirmPassword(password, confirmPassword);
}

const validateEmailFormat = (email) => {
    if (!email.match(EMAIL_REGEX)) {
        throw new Error("Wprowadzono  nieprawidłowy adres e-mail");
    }
}

const validatePasswordLength = (password) => {
    if (password.length < 6) {
        throw new Error("Hasło nie może być krótsze niż 6 znaków");
    }
    if (password.length > 20) {
        throw new Error("Hasło nie może być dłuższe niż 20 znaków");
    }
}

const validateNameLength = (name) => {
    if (name.length === 0) {
        throw new Error("Imię jest wymagane");
    }
    if (name.length > 20) {
        throw new Error("Imię nie może być dłuższe niż 20 znaków");
    }
}

const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error("Hasła nie są takie same");
    }
}