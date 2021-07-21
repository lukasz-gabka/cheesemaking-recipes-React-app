import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Pagination } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { authRequest } from '../scripts/request';
import { useEffect, useState } from 'react';
import { showNotification, SHOW_NOTES, SHOW_NOTES_ERROR, SHOW_NOTES_WARNING, STATUS_RED, STATUS_YELLOW } from '../scripts/notifications';

const URL = "https://localhost:5001/note";

const Note = ({history}) => {
    const [notes, setNotes] = useState(null);
    useEffect(() => {
        const getNotes = async () => {
            const noteArray = await authRequest(URL, 'GET');
            if (!noteArray) {
                history.push({
                    pathname: '/'
                });
                showNotification(SHOW_NOTES, SHOW_NOTES_WARNING, STATUS_YELLOW);
            } else {
                setNotes(noteArray);
            }
        }
        try {
            getNotes();
        } catch (e) {
            history.push({
                pathname: '/'
            });
            showNotification(SHOW_NOTES, SHOW_NOTES_ERROR, STATUS_RED);
        }
    }, []);

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    <Pagination className="justify-content-center">
                        <Pagination.Item>{'<<'}</Pagination.Item>
                        <Pagination.Item>{'<'}</Pagination.Item>

                        <Form.Control as="select">
                            {notes && notes.map((note, index) => (
                                <option key={index} value={index + 1}>{note.name}</option>
                                ))}
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

export default withRouter(Note);