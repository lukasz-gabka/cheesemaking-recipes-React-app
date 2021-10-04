import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Selector from '../selector';
import Note from './note';
import { handleNotes } from '../../../services/entityHandler';
import { setTitle } from '../../../services/titleHandler';
import { getNoteUrl } from '../../../services/url';

const URL = getNoteUrl();
const TITLE = "Modyfikuj notatki";
const SELECTOR_HEADER = "Wybierz notatkę...";

const NoteModifyView = ({history}) => {
    const [notes, setNotes] = useState(null);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);

    const handleState = (noteArray) => {
        setNotes(noteArray);
    };

    useEffect(() => {
        setTitle(TITLE);
        handleNotes(URL, handleState, history);
    }, [currentNoteIndex, history]);

    return (
        <Container className="my-5 mx-auto mainContent">
            <Row>
                <Col>
                    {notes && <Selector entities={notes} 
                                selectedOption={currentNoteIndex} 
                                setIndex={setCurrentNoteIndex} 
                                header={SELECTOR_HEADER}
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