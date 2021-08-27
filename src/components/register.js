import '../stylesheets/form.css';
import React, { useState, useEffect } from 'react';
import { setTitle } from '../services/titleHandler';
import { validateRegister } from '../services/validation';
import request from '../services/request';
import { showNotification, REGISTER_SUCCESS, 
    STATUS_GREEN, STATUS_RED, SUCCESS, ERROR } from '../services/notifications';
import { redirectToHome } from '../services/redirection';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const URI = "https://localhost:5001/user/register";
const TITLE = "Rejestracja";

function Register({history}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => setTitle(TITLE), []);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            validateRegister(email, name, password, confirmPassword);

            const requestBody = {
                email,
                name,
                password,
                confirmPassword
            };
            await request(URI, 'POST', requestBody);
            showNotification(SUCCESS, REGISTER_SUCCESS, STATUS_GREEN);
            redirectToHome(history);
        } catch (e) {
            showNotification(ERROR, e.message, STATUS_RED);
        }
    };

    return (
        <Container className="my-5 mx-auto">
            <Form className="mainContent mx-auto formContent">
                <Form.Group className="mb-4 inputGroup" controlId="registerFormEmail">
                    <Form.Label>Adres e-mail</Form.Label>

                    <Form.Control 
                        className="fextField" 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4 inputGroup" controlId="registerFormName">
                    <Form.Label>Imię</Form.Label>

                    <Form.Control 
                        className="fextField" 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4 inputGroup" controlId="registerFormPassword">
                    <Form.Label>Hasło</Form.Label>

                    <Form.Control 
                        className="fextField" 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4 inputGroup" controlId="registerFormConfirmPassword">
                    <Form.Label>Potwierdź hasło</Form.Label>

                    <Form.Control 
                        className="fextField" 
                        type="password" 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>

                <Button 
                    className="navButton button" 
                    type="submit" 
                    onClick={(e) => handleRegister(e)}
                >
                    Zarejestruj
                </Button>
            </Form>
        </Container>
    )
}

export default withRouter(Register);