import { getCookie } from "./cookies";
import { getAuthorizeUrl } from "./url";

const URL = getAuthorizeUrl();
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
    const response = await fetch(URL, requestOptions);
    if (response.ok) {
        return true;
    }
    
    return false;
};

export default authenticate;