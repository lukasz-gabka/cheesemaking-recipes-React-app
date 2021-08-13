import { authRequest } from "./request";
import { showNotification, NOTES_ERROR, NOTES_WARNING, STATUS_RED, STATUS_YELLOW, ERROR, WARNING, TEMPLATES_ERROR, TEMPLATES_WARNING } 
    from "./notifications";

export const handleNotes = async (URI, handleState, history) => {
    const message = {
        warning: NOTES_WARNING,
        error: NOTES_ERROR
    };

    await handleEntities(URI, handleState, history, message);
};

export const handleTemplates = async (URI, handleState, history) => {
    const message = {
        warning: TEMPLATES_WARNING,
        error: TEMPLATES_ERROR
    };

    await handleEntities(URI, handleState, history, message);
};

const handleEntities = async (URI, handleState, history, message) => {
    try {
        await getEntities(URI, handleState, history, message.warning);
    } catch (e) {
        history.push({
            pathname: '/'
        });
        showNotification(ERROR, message.error, STATUS_RED);
    }
};

const getEntities = async (URI, handleState, history, message) => {
    const entityArray = await authRequest(URI, 'GET');
    if (entityArray) {
        handleState(entityArray);
    } else {
        showNotification(WARNING, message, STATUS_YELLOW);
        history.push({
            pathname: '/'
        });
    }
};

export const mountInputs = (notes) => {
    notes.forEach((note) => {
        var i = 0;
        note.template.categories.forEach((category) => {
            category.labels.forEach((label) => {
                label.input = note.inputs[i];
                i++;
            });
        });
        delete note.inputs;
    });
};