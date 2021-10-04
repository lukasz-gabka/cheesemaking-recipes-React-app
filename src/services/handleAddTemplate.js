import { showNotification, INPUTS_EMPTY, STATUS_YELLOW, WARNING, 
    LABELS_EMPTY } from "./notifications";
import { authRequest } from "./request";
import { getTemplateUrl } from "./url";

const URL = getTemplateUrl();

export const saveTemplate = async (inputs, name) => {
    const body = prepareTemplate(inputs, name);

    if (body) {
        await authRequest(URL, 'POST', body);
        return true;
    }
};

const prepareTemplate = (inputs, name) => {
    if (isEachInputEmpty(inputs) || name === "") {
        showNotification(WARNING, INPUTS_EMPTY, STATUS_YELLOW);
        return false;
    } else if (!hasLabels(inputs)) {
        showNotification(WARNING, LABELS_EMPTY, STATUS_YELLOW);
        return false;
    } else {
        const template = {
            name: name,
            categories: inputs
        }

        return template;
    };
}

const isEachInputEmpty = (inputs) => {
    var isEmpty = false;

    Object.values(inputs).forEach((input) => {
        if (input.name === "") {
            isEmpty = true;
            return;
        }
        input?.labels && Object.values(input.labels).forEach((label) => {
            if (label.name === "") {
                isEmpty = true;
                return;
            }
        })
    });
    return isEmpty;
};

const hasLabels = (inputs) => {
    var isLabelsArray = true;

    Object.values(inputs).forEach((input) => {
        if (!input?.labels) {
            isLabelsArray = false;
            return;
        }
    });
    return isLabelsArray;
};