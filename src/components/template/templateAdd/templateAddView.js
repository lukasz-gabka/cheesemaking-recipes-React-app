import { useState } from "react";
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AddCategoryButton from "./addCategoryButton";
import Button from 'react-bootstrap/Button';
import { saveTemplate } from "../../../services/handleAddTemplate";
import { showNotification, SUCCESS, STATUS_GREEN, STATUS_RED, ERROR, ADD_TEMPLATES_ERROR, 
    ADD_TEMPLATES_SUCCESS } from "../../../services/notifications";
import { redirectToHome } from "../../../services/redirection";    
import Template from "./template";

const TemplateAddView = ({history}) => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);

    const handleAddTemplate = async (e) => {
        try {
            const result = await saveTemplate(e, list, name);
            if (result) {
                showNotification(SUCCESS, ADD_TEMPLATES_SUCCESS, STATUS_GREEN);
                redirectToHome(history);
            }
        } catch(e) {
            showNotification(ERROR, ADD_TEMPLATES_ERROR, STATUS_RED);
        }
    };

    return (
        <Container className="my-5 mx-auto">
            <Row>
                <Col>
                    <Form.Control 
                        type="text" 
                        value={name}
                        className="text-center mx-auto my-5 addNoteTitle" 
                        placeholder="Wpisz nazwę szablonu..."
                        onChange={e => setName(e.target.value)}
                    />
                </Col>
            </Row>

            <Template list={list} setList={setList} />
            
            <Row>
                <Col className="d-flex justify-content-center">
                    <AddCategoryButton list={list} setList={setList} />
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center">
                    {Object.keys(list).length > 0 &&
                        <Button type="button" onClick={(e) => handleAddTemplate(e)}>
                            Zapisz notatkę
                        </Button>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(TemplateAddView);