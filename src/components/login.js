import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <Container className="my-5 mx-auto">
            <Form>
                <Form.Group controlId="loginFormEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Form.Group controlId="loginFormPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Button type="submit">Zaloguj</Button>
            </Form>
        </Container>
    )
}

export default Login;