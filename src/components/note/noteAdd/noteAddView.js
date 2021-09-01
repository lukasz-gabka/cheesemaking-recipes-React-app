import { useEffect, useState } from 'react';
import { setTitle } from '../../../services/titleHandler';
import { handleTemplates } from '../../../services/entityHandler';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Selector from '../selector';
import Note from './note';
import { withRouter } from 'react-router-dom';

const URI = "https://localhost:5001/template";
const TITLE = "Dodaj notatkę";
const SELECTOR_HEADER = "Wybierz szablon...";

const NoteAddView = ({history}) => {
    const [templates, setTemplates] = useState(null);
    const [currentTemplateIndex, setCurrentTemplateIndex] = useState(-1);

    const handleState = (templateArray) => {
        setTitle(TITLE);
        setTemplates(templateArray);
    };

    useEffect(() => {
        handleTemplates(URI, handleState, history);
    }, [history]);

    return (
        <Container className="my-5 mx-auto mainContent">
            <Row>
                <Col>
                    <Selector 
                        entities={templates} 
                        selectedOption={currentTemplateIndex}
                        setSelectedOption={setCurrentTemplateIndex}
                        header={SELECTOR_HEADER}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                        {(templates && currentTemplateIndex >= 0) && (
                            <Note history={history} content={templates[currentTemplateIndex]}/>
                        )}
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(NoteAddView);