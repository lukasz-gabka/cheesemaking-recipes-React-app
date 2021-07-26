import { store } from 'react-notifications-component';

export const LOGIN = "Logowanie";
export const REGISTER = "Rejestracja";
export const LOGOUT = "Wylogowanie";
export const NOTES = "Notatki";
export const TEMPLATES = "Szablony";
export const LOGIN_SUCCESS = "Zalogowano poprawnie";
export const REGISTER_SUCCESS = "Zarejestrowano poprawnie nowego użytkownika";
export const LOGOUT_SUCCESS = "Wylogowano poprawnie";
export const NOTES_WARNING = "Brak notatek do wyświetlenia";
export const TEMPLATES_WARNING = "Brak szablonów do wyświetlenia";
export const NOTES_ERROR = "Próba pobrania notatek zakończona niepowodzeniem";
export const TEMPLATES_ERROR = "Próba pobrania szablonów zakończona niepowodzeniem";
export const STATUS_GREEN = "success";
export const STATUS_RED = "danger";
export const STATUS_YELLOW = "warning";

export const showNotification = (title, message, type) => {
    store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover: true
        }
    });
}