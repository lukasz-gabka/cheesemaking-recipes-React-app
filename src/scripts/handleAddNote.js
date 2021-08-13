import { showNotification, NOTES_INPUTS_EMPTY, STATUS_YELLOW, WARNING } from "./notifications";
import { authRequest } from "./request";

const URL = 'https://localhost:5001/note/';

export const saveNote = async (e, inputs, name, templateId) => {
    e.preventDefault();
    const body = prepareNote(inputs, name);

    if (body) {
        const fullUrl = URL + templateId; 
        await authRequest(fullUrl, 'POST', body);
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