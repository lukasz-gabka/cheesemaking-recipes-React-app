import moment from 'moment';
import cookie from 'react-cookies';

const NAME = "Authentication";

const getExpiry = () => {
    return moment().add(1, 'h').toDate();
}

const options = {
    path: '/',
    expires: getExpiry(),
    sameSite: 'Strict'
};

const setCookie = (value) => {
    cookie.save(NAME, value, options);
};

export const getCookie = () =>  {
    return cookie.load(NAME);
};

export const deleteCookie = () => {
    cookie.remove(NAME);
};

export default setCookie;