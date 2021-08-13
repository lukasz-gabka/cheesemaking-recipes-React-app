import { showNotification, NOTES_INPUTS_EMPTY, STATUS_YELLOW, WARNING, SUCCESS, STATUS_GREEN, 
    ERROR, STATUS_RED, MODIFY_NOTES_ERROR, MODIFY_NOTES_SUCCESS} from "./notifications";
import { authRequest } from "./request";

const URL = 'https://localhost:5001/note/';

export const handleUpdateNote = async (history, inputs, name, id) => {
    try {
        const result = await updateNote(inputs, name, id);
        if (result) {
            showNotification(SUCCESS, MODIFY_NOTES_SUCCESS, STATUS_GREEN);
            history.push({
                pathname: '/'
            });
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
        showNotification(WARNING, NOTES_INPUTS_EMPTY, STATUS_YELLOW);
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