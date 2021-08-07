import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { authRequest } from '../../../scripts/request';
import { useEffect, useState } from 'react';
import { showNotification, NOTES, NOTES_ERROR, NOTES_WARNING, 
    STATUS_RED, STATUS_YELLOW } from '../../../scripts/notifications';
import Selector from './selector';
import Note from './note';

const URL = "https://localhost:5001/note";

const NoteDisplay = ({history}) => {
    const [notes, setNotes] = useState(null);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);

    useEffect(() => {
        const handleGetNotes = async () => {
            const noteArray = await authRequest(URL, 'GET');
            if (noteArray) {
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
    }, [currentNoteIndex, history]);

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    {notes && <Selector notes={notes} 
                                selectedOption={currentNoteIndex} 
                                setIndex={setCurrentNoteIndex} 
                              />
                    }
                </Col>
            </Row>

            <Row>
                <Col>
                    {(notes && currentNoteIndex >= 0) && 
                        <Note content={notes[currentNoteIndex]} history={history}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(NoteDisplay);