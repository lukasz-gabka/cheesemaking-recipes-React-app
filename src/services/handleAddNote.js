import { showNotification, INPUTS_EMPTY, STATUS_YELLOW, WARNING } from "./notifications";
import { authRequest } from "./request";
import { getNoteUrl } from "./url";

const URL = getNoteUrl();

export const saveNote = async (inputs, name, templateId) => {
    const body = prepareNote(inputs, name);

    if (body) {
        const fullUrl = URL + templateId; 
        await authRequest(fullUrl, 'POST', body);
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