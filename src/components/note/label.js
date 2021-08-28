import '../../stylesheets/noteModify.css';
import Form from 'react-bootstrap/Form';

const Label = ({content, inputs, categoryNumber, inputNumber, setInputs}) =>{
    const inputName = `cat${categoryNumber}Input${inputNumber}`;

    const handleChange = (e) => {
        setInputs({...inputs, [inputName]: e.target.value});
    };

    return (
        <div className="mb-3" >
            <p className="d-inline-block labelName">
                {content.name}:
            </p>

            <Form.Control 
                className="d-inline-block addNoteInput fextField" 
                as="textarea" 
                rows="1"
                value={inputs[inputName]}
                placeholder="Wpisz wartość..."
                onChange={e => handleChange(e)}
            />
        </div>
    );
};

export default Label;