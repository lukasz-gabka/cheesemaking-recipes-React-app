import '../../../stylesheets/accordion.css';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ExpandButton from '../../expandButton';
import Button from 'react-bootstrap/Button';
import Category from './category';
import DeleteModal from '../../deleteModal';

const Note = ({note, history}) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
        <Accordion>
            <Card>
                <Card.Header className="accordionHeader">
                    <p>{note.name}</p>
                    <div>
                        <ExpandButton eventKey={note.id}>Click</ExpandButton>
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
            <Accordion.Collapse eventKey={note.id}>
                <Card.Body>
                    {note.template.categories.map(
                        (category, index) => <Category key={index} category={category} />)
                    }
                </Card.Body>
            </Accordion.Collapse>
        </Accordion>
        <DeleteModal isModal={isModal} setIsModal={setIsModal} id={note.id} history={history} />
        </>
    );
};

export default Note;