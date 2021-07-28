import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { authRequest } from '../../../scripts/request';
import { useEffect, useState } from 'react';
import { showNotification, NOTES, NOTES_ERROR, NOTES_WARNING, 
    STATUS_RED, STATUS_YELLOW } from '../../../scripts/notifications';
import NotePagination from './pagination';
import Note from './note';
import { mountInputs } from '../../../scripts/noteHandler';

const URL = "https://localhost:5001/note";

const NoteDisplay = ({history}) => {
    const [notes, setNotes] = useState(null);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
    const [lastNoteIndex, setLastNoteIndex] = useState(0);

    useEffect(() => {
        const getNotes = async () => {
            const noteArray = await authRequest(URL, 'GET');
            if (!noteArray) {
                showNotification(NOTES, NOTES_WARNING, STATUS_YELLOW);
                history.push({
                    pathname: '/'
                });
            } else {
                mountInputs(noteArray);
                setLastNoteIndex(noteArray.length - 1);
                setNotes(noteArray);
            }
        }

        try {
            getNotes();
        } catch (e) {
            history.push({
                pathname: '/'
            });
            showNotification(NOTES, NOTES_ERROR, STATUS_RED);
        }
    }, [currentNoteIndex, history]);

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    <NotePagination 
                        notes={notes} 
                        index={currentNoteIndex}
                        lastIndex={lastNoteIndex}
                        setIndex={setCurrentNoteIndex} 
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    {notes && <Note content={notes[currentNoteIndex]} />}
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(NoteDisplay);