import '../../../stylesheets/accordion.css';
import { useState, useEffect } from "react";
import { setTitle } from "../../../services/titleHandler";
import { handleTemplates } from "../../../services/entityHandler";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Template from "./template";
import { withRouter } from 'react-router-dom';

const URI = "https://localhost:5001/template";
const TITLE = "Wykaz szablonów";

const TemplateListView = ({history}) => {
    const [templates, setTemplates] = useState(null);

    const handleState = (templateArray) => {
        setTitle(TITLE)
        setTemplates(templateArray);
    };

    useEffect(() => {
        handleTemplates(URI, handleState, history);
    }, [history]);

    return (
        <Container className="my-5 mx-auto mainContent">
            <Row>
                <Col>
                    {templates && templates.map((template, index) => <Template key={index} history={history} template={template} />)}
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(TemplateListView);