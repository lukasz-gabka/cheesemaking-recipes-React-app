import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import request from '../services/request';
import setCookie from '../services/cookies';
import { showNotification, SUCCESS, LOGIN_SUCCESS, STATUS_RED, 
    STATUS_GREEN, ERROR } from '../services/notifications';
import { validateLogin } from '../services/validation';
import { redirectToHome } from '../services/redirection';

const URL = "https://localhost:5001/user/login";

function Login({history, setIsAuthenticated}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

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
        <Container className="my-5 mx-auto">
            <Form>
                <Form.Group controlId="loginFormEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="loginFormPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit" onClick={e => handleLogin(e)}>Zaloguj</Button>
            </Form>
        </Container>
    )
}

export default withRouter(Login);