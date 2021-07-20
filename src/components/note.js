import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Pagination } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Note = () => {
    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    <Pagination first-text="Hello" className="justify-content-center">
                        <Pagination.Item>{'<<'}</Pagination.Item>
                        <Pagination.Item>{'<'}</Pagination.Item>

                        <Form.Control as="select">
                            <option selected disabled>Wybierz notatkę...</option>
                            <option value="1">Notatka 1</option>
                            <option value="2">Notatka 2</option>
                            <option value="3">Notatka 3</option>
                        </Form.Control>

                        <Pagination.Item>{'>'}</Pagination.Item>
                        <Pagination.Item>{'>>'}</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>

            <Row>
                <Col >
                    <div className="justify-content-center">notatka</div>
                </Col>
            </Row>
        </Container>
    );
};

export default Note;