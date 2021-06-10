import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
    return (
        <Container className="my-5 mx-auto">
            <Form>
                <Form.Group controlId="registerFormEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Form.Group controlId="registerFormName">
                    <Form.Label>Imię</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group controlId="registerFormPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Form.Group controlId="registerFormConfirmPassword">
                    <Form.Label>Potwierdź hasło</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Button type="submit">Zarejestruj</Button>
            </Form>
        </Container>
    )
}

export default Register;