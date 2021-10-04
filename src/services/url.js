const DOMAIN = 'https://localhost:5001';
const NOTE = '/note/';
const TEMPLATE = '/template/';
const LOGIN = '/user/login/';
const REGISTER = '/user/register/';
const AUTHORIZE = '/user/authorize/';

export const getNoteUrl = () => DOMAIN + NOTE;
export const getTemplateUrl = () => DOMAIN + TEMPLATE;
export const getLoginUrl = () => DOMAIN + LOGIN;
export const getRegisterUrl = () => DOMAIN + REGISTER;
export const getAuthorizeUrl = () => DOMAIN + AUTHORIZE;