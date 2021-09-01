import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ExpandButton from '../../expandButton';
import Button from 'react-bootstrap/Button';
import { handleDeleteTemplate } from '../../../services/entityHandler';
import Category from './category';
import DeleteModal from '../../deleteModal';

const Template = ({template, history}) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <Accordion>
                <Card>
                    <Card.Header className="accordionHeader">
                        <p>{template.name}</p>

                        <div>
                            <ExpandButton eventKey={template.id}>Click</ExpandButton>

                            <Button 
                                className="mx-1 navButton button deleteButton" 
                                type="button" 
                                onClick={() => setIsModal(true)}
                            >
                                Usuń
                            </Button>
                        </div>
                    </Card.Header>
                </Card>

                <Accordion.Collapse eventKey={template.id}>
                    <Card.Body>
                        {template.categories.map(
                            (category, index) => <Category key={index} category={category} />)
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Accordion>

            <DeleteModal 
                isModal={isModal} 
                setIsModal={setIsModal} 
                id={template.id} 
                history={history} 
                action={handleDeleteTemplate} 
            />
        </>
    );
};

export default Template;