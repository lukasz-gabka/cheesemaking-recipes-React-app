import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import picture from '../images/cheese_wheels.jpg';

function Content() {
    return (
        <Container className="m-5">
            <Row>
                <Col sm={6}>
                    <Image src={picture} fluid/>
                </Col>

                <Col sm={6} className="my-auto">
                    <p>Notatnik serowarski to aplikacja do tworzenia i przechowywania Twoich zapisków z produkcji domowego sera.</p>
                    <p>Zarejestruj się, jeżeli nie posiadasz jeszcze konta.</p>
                    <p>Zaloguj się, aby móc korzystać z aplikacji.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Content;