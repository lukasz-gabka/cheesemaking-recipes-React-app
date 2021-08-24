import { useState } from "react";
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AddCategoryButton from "./addCategoryButton";
import Category from "./category";
import AddLabelButton from "./addLabelButton";
import Label from "./label";
import Button from 'react-bootstrap/Button';
import { saveTemplate } from "../../../scripts/handleAddTemplate";
import { showNotification, SUCCESS, STATUS_GREEN, STATUS_RED, ERROR, ADD_TEMPLATES_ERROR, 
    ADD_TEMPLATES_SUCCESS } from "../../../scripts/notifications";
import { redirectToHome } from "../../../scripts/redirection";    

const TemplateAddView = ({history}) => {
    const [name, setName] = useState('');
    const [list, setList] = useState({});

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

            {(Object.keys(list).length > 0) && Object.entries(list).map(([key, value], index) => {
                return (
                    <>
                        <Category key={index} list={list} setList={setList} name={key} />
                        {value?.labels && Object.keys(value.labels).length > 0 && Object.entries(value.labels).map((label, index) => {
                            return (<Label key={index} list={list} setList={setList} categoryName={key} name={Object.values(label)[0]} />);
                        })}
                        <AddLabelButton key={index+100} categoryName={key} list={list} setList={setList} />
                    </>
                );
            })}
            
            <Row>
                <Col className="d-flex justify-content-center">
                    <AddCategoryButton list={list} setList={setList} />
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center">
                    {Object.keys(list).length > 0 &&
                        <Button type="button" className="addCategoryItem" onClick={(e) => handleAddTemplate(e)}>
                            Zapisz notatkę
                        </Button>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(TemplateAddView);