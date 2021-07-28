import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { authRequest } from '../../../scripts/request';
import { useEffect, useState } from 'react';
import { showNotification, NOTES_ERROR, 
    STATUS_RED, STATUS_YELLOW, TEMPLATES, TEMPLATES_WARNING } from '../../../scripts/notifications';
import Note from './note';
import Selector from './selector';

const URL = "https://localhost:5001/template";

const NoteAddDisplay = ({history}) => {
    const [templates, setTemplates] = useState(null);
    const [currentTemplateIndex, setCurrentTemplateIndex] = useState(-1);

    useEffect(() => {
        const getTemplates = async () => {
            const templateArray = await authRequest(URL, 'GET');
            if (!templateArray) {
                showNotification(TEMPLATES, TEMPLATES_WARNING, STATUS_YELLOW);
                history.push({
                    pathname: '/'
                });
            } else {
                setTemplates(templateArray);
            }
        }

        try {
            getTemplates();
        } catch (e) {
            history.push({
                pathname: '/'
            });
            showNotification(TEMPLATES, NOTES_ERROR, STATUS_RED);
        }
    }, [history]);

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    <Selector 
                        templates={templates} 
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

export default withRouter(NoteAddDisplay);