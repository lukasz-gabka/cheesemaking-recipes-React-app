import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ExpandButton from '../../expandButton';
import Button from 'react-bootstrap/Button';
import Category from './category';
import { handleDeleteTemplate } from '../../../services/entityHandler';

const Template = ({template, history}) => {
    return (
        <Accordion>
            <Card>
                <Card.Header className="accordionHeader">
                    {template.name}
                    <div>
                        <ExpandButton eventKey={template.id}>Click</ExpandButton>
                        <Button 
                            className="bg-danger" 
                            type="button" 
                            onClick={() => handleDeleteTemplate(template.id, history)}
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
    );
};

export default Template;