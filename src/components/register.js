import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import request from '../scripts/request';
import { showNotification, REGISTER, REGISTER_SUCCESS, STATUS_GREEN, STATUS_RED } from '../scripts/notifications';
import { validateRegister } from '../scripts/validation';

const URL = "https://localhost:5001/user/register";

function Register({history}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            await request(URL, 'POST', requestBody);
            showNotification(REGISTER, REGISTER_SUCCESS, STATUS_GREEN);
            history.push({
                pathname: '/'
            });
        } catch (e) {
            showNotification(REGISTER, e.message, STATUS_RED);
        }
    };

    return (
        <Container className="my-5 mx-auto">
            <Form>
                <Form.Group controlId="registerFormEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="registerFormName">
                    <Form.Label>Imię</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="registerFormPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="registerFormConfirmPassword">
                    <Form.Label>Potwierdź hasło</Form.Label>
                    <Form.Control type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </Form.Group>

                <Button type="submit" onClick={handleRegister}>Zarejestruj</Button>
            </Form>
        </Container>
    )
}

export default withRouter(Register);