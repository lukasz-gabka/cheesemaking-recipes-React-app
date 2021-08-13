import Form from 'react-bootstrap/Form';

const Label = ({content, inputs, categoryNumber, inputNumber, setInputs}) =>{
    const inputName = `cat${categoryNumber}Input${inputNumber}`;

    const handleChange = (e) => {
        setInputs({...inputs, [inputName]: e.target.value});
    };

    return (
        <div className="mb-3" >
            <h3 className="d-inline-block mx-5">
                {content.name}:
            </h3>

            <Form.Control 
                as="textarea" 
                rows="1"
                value={inputs[inputName]}
                className="d-inline-block addNoteInput" 
                placeholder="Wpisz wartość..."
                onChange={e => handleChange(e)}
            />
        </div>
    );
};

export default Label;