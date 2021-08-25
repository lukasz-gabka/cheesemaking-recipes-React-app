import { useState, useEffect } from "react";
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import { handleTemplates } from "../../../services/entityHandler";
import Template from "./template";

const URI = "https://localhost:5001/template";

const TemplateListView = ({history}) => {
    const [templates, setTemplates] = useState(null);

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
                    {templates && templates.map((template, index) => <Template key={index} history={history} template={template} />)}
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(TemplateListView);