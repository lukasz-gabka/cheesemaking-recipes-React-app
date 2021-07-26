import Form from 'react-bootstrap/Form';

const NoteAddSelector = ({selectedOption, templates, setSelectedOption}) => {
    return (
        <Form.Control 
            value={selectedOption} 
            as="select" 
            onChange={(e) => {
                setSelectedOption(e.target.value);
            }}
        >
            {templates && 
                <>
                    <option disabled key="-1" value="-1">Wybierz szablon notatki...</option>
                    {templates.map((template, index) => (
                        <option key={index} value={index}>{template.name}</option>
                        ))}
                </>
                }
        </Form.Control>
    );
};

export default NoteAddSelector;