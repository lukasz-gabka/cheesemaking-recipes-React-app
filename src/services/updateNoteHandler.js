import { showNotification, INPUTS_EMPTY, STATUS_YELLOW, WARNING, SUCCESS, STATUS_GREEN, 
    ERROR, STATUS_RED, MODIFY_NOTES_ERROR, MODIFY_NOTES_SUCCESS} from "./notifications";
import { redirectToHome } from "./redirection";
import { authRequest } from "./request";
import { getNoteUrl } from "./url";

const URL = getNoteUrl();

export const handleUpdateNote = async (history, inputs, name, id) => {
    try {
        const result = await updateNote(inputs, name, id);
        if (result) {
            showNotification(SUCCESS, MODIFY_NOTES_SUCCESS, STATUS_GREEN);
            redirectToHome(history);
        }
    } catch(e) {
        showNotification(ERROR, MODIFY_NOTES_ERROR, STATUS_RED);
    }
};

export const updateNote = async (inputs, name, noteId) => {
    const body = prepareNote(inputs, name);

    if (body) {
        const fullUrl = URL + noteId; 
        await authRequest(fullUrl, 'PUT', body);
        return true;
    }
};

const prepareNote = (inputs, name) => {
    if (isEachInputEmpty(inputs) || name === "") {
        showNotification(WARNING, INPUTS_EMPTY, STATUS_YELLOW);
        return false;
    } else {
        const inputValues  =  Object.values(inputs);
        const noteInputs = [];
        inputValues.forEach((value) => {
            noteInputs.push({'value': value});
        });

        const note = {
            name,
            inputs: noteInputs
        };
        return note;
    };
}

const isEachInputEmpty = (inputs) => {
   for (const input in inputs) {
        if (inputs[input] === "") {
            return true;
        }
    };
    return false;
};