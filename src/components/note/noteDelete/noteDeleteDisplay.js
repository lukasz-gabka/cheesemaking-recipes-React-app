import { useState, useEffect } from "react";
import { authRequest } from "../../../scripts/request";
import { mountInputs } from "../../../scripts/noteHandler";
import { showNotification, NOTES, NOTES_WARNING, NOTES_ERROR, 
    STATUS_YELLOW, STATUS_RED } from "../../../scripts/notifications";
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import Note from "./note";

const URL = "https://localhost:5001/note";

const NoteDeleteDisplay = ({history}) => {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const handleGetNotes = async () => {
            const noteArray = await authRequest(URL, 'GET');
            if (noteArray) {
                mountInputs(noteArray);
                setNotes(noteArray);
            } else {
                showNotification(NOTES, NOTES_WARNING, STATUS_YELLOW);
                history.push({
                    pathname: '/'
                });
            }
        };

        try {
            handleGetNotes();
        } catch (e) {
            history.push({
                pathname: '/'
            });
            showNotification(NOTES, NOTES_ERROR, STATUS_RED);
        }
    }, [history]);

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    {notes && notes.map((note, index) => <Note key={index} history={history} note={note} />)}
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(NoteDeleteDisplay);