import { authRequest } from "./request";
import { showNotification, NOTES_ERROR, NOTES_WARNING, STATUS_RED, STATUS_YELLOW, ERROR, 
    WARNING, TEMPLATES_ERROR, TEMPLATES_WARNING, NOTES_DELETE_ERROR, TEMPLATES_DELETE_ERROR, 
    NOTES_DELETE_SUCCESS, TEMPLATES_DELETE_SUCCESS, SUCCESS, STATUS_GREEN } from "./notifications";
import { redirectToHome } from "./redirection";    

const noteInfo = {
    url: "https://localhost:5001/note/",
    warning: NOTES_WARNING,
    deleteSuccess: NOTES_DELETE_SUCCESS,
    deleteError: NOTES_DELETE_ERROR,
    error: NOTES_ERROR
};

const templateInfo = {
    url: "https://localhost:5001/template/",
    warning: TEMPLATES_WARNING,
    deleteSuccess: TEMPLATES_DELETE_SUCCESS,
    deleteError: TEMPLATES_DELETE_ERROR,
    error: TEMPLATES_ERROR
};

export const handleNotes = async (URI, handleState, history) => {
    await handleEntities(URI, handleState, history, noteInfo);
};

export const handleTemplates = async (URI, handleState, history) => {
    await handleEntities(URI, handleState, history, templateInfo);
};

const handleEntities = async (URI, handleState, history, message) => {
    try {
        await getEntities(URI, handleState, history, message.warning);
    } catch (e) {
        redirectToHome(history);
        showNotification(ERROR, message.error, STATUS_RED);
    }
};

const getEntities = async (URI, handleState, history, entityInfo) => {
    const entityArray = await authRequest(URI, 'GET');
    if (entityArray) {
        handleState(entityArray);
    } else {
        showNotification(WARNING, entityInfo, STATUS_YELLOW);
        redirectToHome(history);
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

export const handleDeleteNote = async (id, history) => {
    await handleDeleteEntity(id, history, noteInfo);
};

export const handleDeleteTemplate = async (id, history) => {
    await handleDeleteEntity(id, history, templateInfo);
};

const handleDeleteEntity = async (id, history, entityInfo) =>  {
        try {
            await deleteEntity(entityInfo.url, id);
            showNotification(SUCCESS, entityInfo.deleteSuccess, STATUS_GREEN);
            redirectToHome(history);
        } catch (e) {
            if (isSpecificErrorMessage(e)) {
                showNotification(ERROR, e.message, STATUS_RED);
            } else {
                showNotification(ERROR, entityInfo.deleteError, STATUS_RED);
            }
            redirectToHome(history);
        }
    };

const deleteEntity = async (url, id) => {
    const fullUrl = url + id;
    await authRequest(fullUrl, 'DELETE');
};

const isSpecificErrorMessage = (e) => {
    if (e.message === "Nie można usunąć szablonu, który jest wykorzystywany przez co najmniej jedną notatkę") {
        return true;
    }
    return false;
}