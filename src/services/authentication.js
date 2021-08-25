import { getCookie } from "./cookies";

const url = "https://localhost:5001/user/authorize";
var requestOptions = {
    method: 'GET',
    headers: {Authorization: ''}
};

const authenticate = async () => {
    const token = getCookie();
    if (token == null) {
        return false;
    }

    requestOptions.headers.Authorization = 'Bearer ' + token;
    const response = await fetch(url, requestOptions);
    if (response.ok) {
        return true;
    }
    
    return false;
};

export default authenticate;