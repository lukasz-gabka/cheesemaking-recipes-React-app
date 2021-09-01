import '../../../stylesheets/form.css';
import Category from "../category";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { handleUpdateNote } from "../../../services/updateNoteHandler";
import { nameInputs } from "../../../services/noteHandler";

const Note = ({content, history}) =>{
    const [inputs, setInputs] = useState({});
    const [name, setName] = useState('');
    var categoryNumber = 1;

    useEffect(() => {
        const inputNames = nameInputs(content);
        setInputs(inputNames);
        setName(content.name);
    }, [content]);

    return (
        <>
            <Form>
                <Form.Control 
                    className="text-center mx-auto my-5 addEntityInput fextField title" 
                    type="text" 
                    value={name}
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

                <Button 
                    className="navButton button"
                    type="button" 
                    onClick={() => handleUpdateNote(history, inputs, name, content.id)}
                >
                    Zapisz zmiany
                </Button>
            </Form>
        </>
    );
};

export default Note;