import '../stylesheets/form.css';
import React, { useState, useEffect } from 'react';
import { setTitle } from '../services/titleHandler';
import { validateLogin } from '../services/validation';
import request from '../services/request';
import setCookie from '../services/cookies';
import { showNotification, SUCCESS, LOGIN_SUCCESS, STATUS_RED, 
    STATUS_GREEN, ERROR } from '../services/notifications';
import { redirectToHome } from '../services/redirection';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';
import { getLoginUrl } from '../services/url';
import SubmitButton from './submitButton';

const URL = getLoginUrl();
const TITLE = "Logowanie";

function Login({history, setIsAuthenticated}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => setTitle(TITLE), []);

    const handleLogin = async () => {
        try {
            validateLogin(email, password);

            const requestBody = {
                email,
                password
            };
            const token = await request(URL, 'POST', requestBody);
            setCookie(token);
            setIsAuthenticated(true);
            showNotification(SUCCESS, LOGIN_SUCCESS, STATUS_GREEN);
            redirectToHome(history);
        } catch(e) {
            showNotification(ERROR, e.message, STATUS_RED);
        }
    }

    return (
        <Container className="my-5">
            <Form className="mainContent mx-auto formContent">
                <Form.Group className="mb-4 inputGroup" controlId="loginFormEmail">
                    <Form.Label>Adres e-mail</Form.Label>

                    <Form.Control 
                        className="fextField"
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-4 inputGroup" controlId="loginFormPassword">
                    <Form.Label>Hasło</Form.Label>

                    <Form.Control 
                        className="fextField"
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </Form.Group>

                <SubmitButton handleEvent={handleLogin} name="Zaloguj" />
            </Form>
        </Container>
    )
}

export default withRouter(Login);