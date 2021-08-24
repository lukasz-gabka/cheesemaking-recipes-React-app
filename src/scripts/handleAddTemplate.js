import { showNotification, INPUTS_EMPTY, STATUS_YELLOW, WARNING, 
    LABELS_EMPTY } from "./notifications";
import { authRequest } from "./request";

const URL = 'https://localhost:5001/template/';

export const saveTemplate = async (e, inputs, name) => {
    e.preventDefault();
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
        var categoriesBody = [];
        var labelsBody = [];

        Object.values(inputs).forEach((input) => {
            Object.values(input.labels).forEach((label) => {
                labelsBody.push({name: label.name});
            });

            categoriesBody.push({
                name: input.name,
                labels: labelsBody
            });
            labelsBody = [];
        });

        const template = {
            name: name,
            categories: categoriesBody
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