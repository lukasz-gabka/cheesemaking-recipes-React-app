import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import picture from '../../images/cheese_factory.jpg';

const HomePrivate = () => (
    <Container className="my-5 mx-auto">
        <Row className="mainContent">
            <Col md={6}>
                <Image src={picture} fluid/>
            </Col>

            <Col md={6} className="my-auto contentText">
                <p>Witaj!</p>
                <p>Wybierz interesującą Cię pozycję z menu powyżej.</p>
            </Col>
        </Row>
    </Container>
);

export default HomePrivate;