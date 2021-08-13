import { authRequest } from "./request";
import { showNotification, SUCCESS, NOTES_DELETE_SUCCESS, STATUS_GREEN, ERROR, 
    NOTES_DELETE_ERROR, STATUS_RED } from "./notifications";

const URL = "https://localhost:5001/note/";

export const handleDeleteNote = async (id, history) =>  {
        try {
            await deleteNote(id);
            history.push({
                pathname: '/'
            });
            showNotification(SUCCESS, NOTES_DELETE_SUCCESS, STATUS_GREEN);
        } catch (e) {
            history.push({
                pathname: '/'
            });
            showNotification(ERROR, NOTES_DELETE_ERROR, STATUS_RED);
        }
    };

const deleteNote = async (id) => {
    const fullUrl = URL + id;
    await authRequest(fullUrl, 'DELETE');
};