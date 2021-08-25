import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Note from './note';
import Selector from '../selector';
import { handleTemplates } from '../../../services/entityHandler';

const URI = "https://localhost:5001/template";

const NoteAddView = ({history}) => {
    const [templates, setTemplates] = useState(null);
    const [currentTemplateIndex, setCurrentTemplateIndex] = useState(-1);

    const handleState = (templateArray) => {
        setTemplates(templateArray);
    };

    useEffect(() => {
        handleTemplates(URI, handleState, history);
    }, [history]);

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    <Selector 
                        entities={templates} 
                        selectedOption={currentTemplateIndex}
                        setSelectedOption={setCurrentTemplateIndex}
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