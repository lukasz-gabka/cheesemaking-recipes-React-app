import { store } from 'react-notifications-component';

export const SUCCESS = "SUKCES";
export const WARNING = "UWAGA";
export const ERROR = "BŁĄD";
export const LOGIN_SUCCESS = "Zalogowano poprawnie";
export const REGISTER_SUCCESS = "Zarejestrowano poprawnie nowego użytkownika";
export const LOGOUT_SUCCESS = "Wylogowano poprawnie";
export const ADD_NOTES_SUCCESS = "Pomyślnie dodano notatkę";
export const ADD_TEMPLATES_SUCCESS = "Pomyślnie dodano szablon";
export const MODIFY_NOTES_SUCCESS = "Pomyślnie uaktualniono notatkę";
export const NOTES_WARNING = "Brak notatek do wyświetlenia";
export const TEMPLATES_WARNING = "Brak szablonów do wyświetlenia";
export const INPUTS_EMPTY = "Niektóre pola pozostały niewypełnione";
export const LABELS_EMPTY = "Każda kategoria mui posiadać przynajmniej jedno pole";
export const NOTES_ERROR = "Próba pobrania notatek zakończona niepowodzeniem";
export const NOTES_DELETE_ERROR = "Próba usunięcia notatki zakończona niepowodzeniem";
export const TEMPLATES_DELETE_ERROR = "Próba usunięcia szablonu zakończona niepowodzeniem";
export const NOTES_DELETE_SUCCESS = "Pomyślnie usunięto notatkę";
export const TEMPLATES_DELETE_SUCCESS = "Pomyślnie usunięto szablon";
export const ADD_NOTES_ERROR = "Próba dodania notatki zakończona niepowodzeniem";
export const ADD_TEMPLATES_ERROR = "Próba dodania szablonu zakończona niepowodzeniem";
export const MODIFY_NOTES_ERROR = "Próba aktualizacji notatki zakończona niepowodzeniem";
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