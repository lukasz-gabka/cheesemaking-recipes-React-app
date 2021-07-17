import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import picture from '../../images/cheese_factory.jpg';
import { showNotification, LOGIN, LOGIN_SUCCESS, STATUS_GREEN } from '../../scripts/notifications';

function HomePrivate(props) {
    if (props?.location?.state?.loginSuccess) {
        showNotification(LOGIN, LOGIN_SUCCESS, STATUS_GREEN);
        delete props.location.state.loginSuccess;
    }

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col md={6}>
                    <Image src={picture} fluid/>
                </Col>

                <Col md={6} className="my-auto">
                    <p>Witaj zalogowany użytkowniku.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePrivate;