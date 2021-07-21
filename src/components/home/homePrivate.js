import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import picture from '../../images/cheese_factory.jpg';

function HomePrivate(props) {
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