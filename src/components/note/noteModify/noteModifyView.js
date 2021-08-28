import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Selector from './selector';
import Note from './note';
import { handleNotes } from '../../../services/entityHandler';
import { setTitle } from '../../../services/titleHandler';

const URI = "https://localhost:5001/note";
const TITLE = "Modyfikuj notatki";

const NoteModifyView = ({history}) => {
    const [notes, setNotes] = useState(null);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);

    const handleState = (noteArray) => {
        setNotes(noteArray);
    };

    useEffect(() => {
        setTitle(TITLE);
        handleNotes(URI, handleState, history);
    }, [currentNoteIndex, history]);

    return (
        <Container className="my-5 mx-auto mainContent">
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

export default withRouter(NoteModifyView);