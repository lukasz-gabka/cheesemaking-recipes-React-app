import { useState, useEffect } from "react";
import { saveNote } from "../../../services/handleAddNote";
import { showNotification, ADD_NOTES_ERROR, ADD_NOTES_SUCCESS, 
    STATUS_RED, STATUS_GREEN, SUCCESS, ERROR } from "../../../services/notifications";
import { redirectToHome } from "../../../services/redirection";
import Form from 'react-bootstrap/Form';
import Category from "../category";
import Button from 'react-bootstrap/Button';

const Note = ({content, history}) =>{
    const [inputs, setInputs] = useState({});
    const [name, setName] = useState('');
    var categoryNumber = 1;

    useEffect(() => {
        var inputNames = {};
        var categoryNumber = 1;

        content.categories.forEach((category) => {
            var inputNumber = 1;
            category.labels.forEach(() => {
                inputNames[`cat${categoryNumber}Input${inputNumber++}`] = '';
            });
            categoryNumber++;
        });

        setInputs(inputNames);
        setName('');
    }, [content.categories]);

    const handleAddNote = async () => {
        try {
            const result = await saveNote(inputs, name, content.id);
            if (result) {
                showNotification(SUCCESS, ADD_NOTES_SUCCESS, STATUS_GREEN);
                redirectToHome(history);
            }
        } catch(e) {
            showNotification(ERROR, ADD_NOTES_ERROR, STATUS_RED);
        }
    };

    return (
        <>
            {content && 
                <>
                    <Form>
                        <Form.Control 
                            type="text" 
                            value={name}
                            className="text-center mx-auto my-5 addEntityInput fextField title" 
                            placeholder="Wpisz nazwę notatki..."
                            onChange={e => setName(e.target.value)}
                        />

                        {content.categories.map((category, index) => (
                            <Category 
                                categoryNumber={categoryNumber++} 
                                inputs={inputs} 
                                setInputs={setInputs}
                                key={index} 
                                content={category} 
                            />
                        ))}
                        
                        <Button className="navButton button" type="button" onClick={() => handleAddNote()}>
                            Zapisz notatkę
                        </Button>
                    </Form>
                </>
            }   
        </>
    );
};

export default Note;