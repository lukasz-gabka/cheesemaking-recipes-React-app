import { useState, useEffect } from "react";
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import Note from "./note";
import { handleNotes, mountInputs } from "../../../services/entityHandler";

const URI = "https://localhost:5001/note";

const NoteDeleteView = ({history}) => {
    const [notes, setNotes] = useState(null);

    const handleState = (noteArray) => {
        mountInputs(noteArray);
        setNotes(noteArray);
    };

    useEffect(() => {
        handleNotes(URI, handleState, history);
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

export default withRouter(NoteDeleteView);