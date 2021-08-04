import Accordion from 'react-bootstrap/Accordion'
import Category from './category';
import Card from 'react-bootstrap/Card'
import ExpandButton from './expandButton';
import Button from 'react-bootstrap/Button';
import { deleteNote } from '../../../scripts/handleDelete';
import { showNotification, NOTES, NOTES_DELETE_ERROR, NOTES_DELETE_SUCCESS, 
    STATUS_RED, STATUS_GREEN } from '../../../scripts/notifications';

const Note = ({note, history}) => {
    const handleDeleteNote = async () =>  {
        try {
            await deleteNote(note.id);
            history.push({
                pathname: '/'
            });
            showNotification(NOTES, NOTES_DELETE_SUCCESS, STATUS_GREEN);
        } catch (e) {
            history.push({
                pathname: '/'
            });
            showNotification(NOTES, NOTES_DELETE_ERROR, STATUS_RED);
        }
    };

    return (
        <Accordion>
            <Card>
                <Card.Header className="accordionHeader">
                    {note.name}
                    <div>
                        <ExpandButton eventKey={note.id}>Click</ExpandButton>
                        <Button className="bg-danger" type="button" onClick={() => handleDeleteNote()}>Usuń</Button>
                    </div>
                </Card.Header>
                
            </Card>
            <Accordion.Collapse eventKey={note.id}>
                <Card.Body>
                    {note.template.categories.map((category, index) => <Category key={index} category={category} />)}
                </Card.Body>
            </Accordion.Collapse>
        </Accordion>
    );
};

export default Note;