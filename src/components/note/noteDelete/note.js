import Accordion from 'react-bootstrap/Accordion'
import Category from './category';
import Card from 'react-bootstrap/Card'
import ExpandButton from '../../expandButton';
import Button from 'react-bootstrap/Button';
import { handleDeleteNote } from '../../../services/entityHandler';

const Note = ({note, history}) => {
    return (
        <Accordion>
            <Card>
                <Card.Header className="accordionHeader">
                    {note.name}
                    <div>
                        <ExpandButton eventKey={note.id}>Click</ExpandButton>
                        <Button 
                            className="bg-danger" 
                            type="button" 
                            onClick={() => handleDeleteNote(note.id, history)}
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
    );
};

export default Note;