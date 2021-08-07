import Category from "./category";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { updateNote } from "../../../scripts/handleUpdateNote";
import { showNotification, NOTES, MODIFY_NOTES_SUCCESS, MODIFY_NOTES_ERROR,
     STATUS_GREEN, STATUS_RED } from "../../../scripts/notifications";

const Note = ({content, history}) =>{
    const [inputs, setInputs] = useState({});
    const [name, setName] = useState('');
    var categoryNumber = 1;

    useEffect(() => {
        var inputNames = {};
        var categoryNumber = 1;
        var inputIndex = 0;

        content.template.categories.forEach((category) => {
            var inputNumber = 1;
            category.labels.forEach(() => {
                inputNames[`cat${categoryNumber}Input${inputNumber++}`] = content.inputs[inputIndex++].value;
            });
            categoryNumber++;
        });
        setInputs(inputNames);
        setName(content.name);
        console.log(inputs);
    }, [content]);

    const handleUpdateNote = async (e) => {
        try {
            const result = await updateNote(e, inputs, name, content.id);
            if (result) {
                showNotification(NOTES, MODIFY_NOTES_SUCCESS, STATUS_GREEN);
                history.push({
                    pathname: '/'
                });
            }
        } catch(e) {
            showNotification(NOTES, MODIFY_NOTES_ERROR, STATUS_RED);
        }
    };

    return (
        <>
            <Form>
                <Form.Control 
                    type="text" 
                    value={name}
                    className="text-center mx-auto my-5 addNoteTitle" 
                    placeholder="Wpisz nazwę notatki..."
                    onChange={e => setName(e.target.value)}
                />

                {content.template.categories.map((category, index) => 
                    <Category 
                        key={index} 
                        content={category} 
                        inputs={inputs} 
                        setInputs={setInputs} 
                        categoryNumber={categoryNumber++}
                    />
                )}

                <Button type="submit" onClick={(e) => handleUpdateNote(e)}>
                    Zapisz zmiany
                </Button>
            </Form>
        </>
    );
};

export default Note;