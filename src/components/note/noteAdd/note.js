import { useEffect, useState } from "react";
import Category from "./category";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { saveNote } from "../../../scripts/handleAddNote";
import { ADD_NOTES_ERROR, ADD_NOTES_SUCCESS, NOTES, showNotification, STATUS_RED, STATUS_GREEN } from "../../../scripts/notifications";

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

    const handleAddNote = async (e) => {
        try {
            const result = await saveNote(e, inputs, name, content.id);
            if (result) {
                showNotification(NOTES, ADD_NOTES_SUCCESS, STATUS_GREEN);
                history.push({
                    pathname: '/'
                });
            }
        } catch(e) {
            showNotification(NOTES, ADD_NOTES_ERROR, STATUS_RED);
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
                            className="text-center mx-auto my-5 addNoteTitle" 
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
                        <Button type="submit" onClick={(e) => handleAddNote(e)}>
                            Zapisz notatkę
                        </Button>
                    </Form>
                </>
            }   
        </>
    );
};

export default Note;