import { useState, useEffect } from "react";
import { setTitle } from "../../../services/titleHandler";
import { saveTemplate } from "../../../services/handleAddTemplate";
import { showNotification, SUCCESS, STATUS_GREEN, STATUS_RED, ERROR, ADD_TEMPLATES_ERROR, 
    ADD_TEMPLATES_SUCCESS } from "../../../services/notifications";
import { redirectToHome } from "../../../services/redirection";  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Template from "./template";
import AddCategoryButton from "./addCategoryButton"; 
import { withRouter } from 'react-router-dom';
import SubmitButton from "../../submitButton";

const TITLE = "Dodaj szablon";

const TemplateAddView = ({history}) => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => setTitle(TITLE), []);

    const handleAddTemplate = async () => {
        try {
            const result = await saveTemplate(list, name);
            if (result) {
                showNotification(SUCCESS, ADD_TEMPLATES_SUCCESS, STATUS_GREEN);
                redirectToHome(history);
            }
        } catch(e) {
            showNotification(ERROR, ADD_TEMPLATES_ERROR, STATUS_RED);
        }
    };

    return (
        <Container className="my-5 mx-auto mainContent">
            <Row>
                <Col>
                    <Form.Control 
                        type="text" 
                        value={name}
                        className="text-center mx-auto my-5 addEntityInput fextField title" 
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
                        <SubmitButton handleEvent={handleAddTemplate} name="Zapisz notatkę" classString="mt-5" />
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(TemplateAddView);