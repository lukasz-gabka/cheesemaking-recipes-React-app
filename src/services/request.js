import { getCookie } from "./cookies";

const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': ''
}

const isJson = (input) => {
    try {
        var o = JSON.parse(input);
        if (o && typeof o === "object") {
            return true;
        }
    }
    catch (e) { 
        return false;
    }
    return false;
};

const parseError = async (response) => {
    let errorMessage = await response.text();

    if (isJson(errorMessage)) {
        let errorObject = JSON.parse(errorMessage);
        const errorArray = Object.values(errorObject.errors);
        errorMessage = errorArray.join("\n")
    }

    return errorMessage;
}

const request = async (url, requestType, requestBody = null) => {
    if (requestBody !== null) {
        requestBody = JSON.stringify(requestBody);
    }

    const requestOptions = {
        method: requestType,
        headers: headers,
        body: requestBody
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
        return response.status === 200 && await response.json();
    } else {
        const errorMessage = await parseError(response);
        throw new Error(errorMessage);
    }
}

export const authRequest  = async (url, requestType, requestBody = null) => {
    const token = getCookie();
    headers.Authorization = 'Bearer ' + token;
    return request(url, requestType, requestBody);
}

export default request;