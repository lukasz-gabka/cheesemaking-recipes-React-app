import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import picture from '../../images/cheese_wheels.jpg';
import { showNotification, REGISTER, REGISTER_SUCCESS, STATUS_GREEN } from '../../scripts/notifications';

function HomePublic(props) {
    if (props?.location?.state?.registerSuccess) {
        showNotification(REGISTER, REGISTER_SUCCESS, STATUS_GREEN);
        delete props.location.state.registerSuccess;
    }

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col md={6}>
                    <Image src={picture} fluid/>
                </Col>

                <Col md={6} className="my-auto">
                    <p>Notatnik serowarski to aplikacja do tworzenia i przechowywania Twoich zapisków z produkcji domowego sera.</p>
                    <p>Zarejestruj się, jeżeli nie posiadasz jeszcze konta.</p>
                    <p>Zaloguj się, aby móc korzystać z aplikacji.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePublic;