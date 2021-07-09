import moment from 'moment';
import cookie from 'react-cookies';

const name = "Authentication";

const getExpiry = () => {
    return moment().add(1, 'h').toDate();
}

const options = {
    path: '/',
    expires: getExpiry(),
    sameSite: 'Strict'
};

const setCookie = (value) => {
    cookie.save(name, value, options);
};

export const getCookie = () =>  {
    return cookie.load(name);
};

export const deleteCookie = () => {
    cookie.remove(name);
};

export default setCookie;