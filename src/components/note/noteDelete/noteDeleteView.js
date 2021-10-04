import { setTitle } from "../../../services/titleHandler";
import { useState, useEffect } from "react";
import { mountInputs, handleNotes } from "../../../services/entityHandler";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Note from "./note";
import { withRouter } from 'react-router-dom';
import { getNoteUrl } from "../../../services/url";

const URL = getNoteUrl();
const TITLE= "Usuń notatki";

const NoteDeleteView = ({history}) => {
    const [notes, setNotes] = useState(null);

    const handleState = (noteArray) => {
        mountInputs(noteArray);
        setNotes(noteArray);
    };

    useEffect(() => {
        setTitle(TITLE);
        handleNotes(URL, handleState, history);
    }, [history]);

    return (
        <Container className="my-5 mx-auto mainContent">
            <Row>
                <Col>
                    {notes && notes.map((note, index) => (
                        <Note key={index} history={history} note={note} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(NoteDeleteView);