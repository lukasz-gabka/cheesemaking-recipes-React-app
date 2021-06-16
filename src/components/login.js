import React,  {useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import request from '../scripts/request';
import setCookie, { getCookie } from '../scripts/cookies';

const url = "https://localhost:5001/user/login";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const requestBody = {
                email,
                password
            };

        try {
            const token = await request(url, requestBody);
            setCookie(token);
        } catch(e) {
            console.log(e.message);
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

                <Button type="submit" onClick={handleLogin}>Zaloguj</Button>
            </Form>
        </Container>
    )
}

export default Login;