import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import NotePagination from './pagination';
import Note from './note';
import { handleNotes, mountInputs } from '../../../scripts/entityHandler';

const URI = "https://localhost:5001/note";

const NoteDisplayView = ({history}) => {
    const [notes, setNotes] = useState(null);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
    const [lastNoteIndex, setLastNoteIndex] = useState(0);

    const handleState = (noteArray) => {
        mountInputs(noteArray);
        setLastNoteIndex(noteArray.length - 1);
        setNotes(noteArray);
    };

    useEffect(() => {
        handleNotes(URI, handleState, history);
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

export default withRouter(NoteDisplayView);