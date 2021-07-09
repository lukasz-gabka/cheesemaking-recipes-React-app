import { getCookie } from "./cookies";

const url = "https://localhost:5001/user/authorize";
var requestOptions = {
    method: 'GET',
    headers: {Authorization: ''}
};

const authenticate = async () => {
    const token = getCookie();
    if (token == null) {
        console.log("no cookie");
        return false;
    }

    requestOptions.headers.Authorization = 'Bearer ' + token;
    const response = await fetch(url, requestOptions);
    if (response.ok) {
        console.log("authorized");
        return true;
    }
    console.log("bad request");
    return false;
};

export default authenticate;