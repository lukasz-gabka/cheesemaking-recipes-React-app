import Form from 'react-bootstrap/Form';

const Selector = ({selectedOption, notes, setIndex, setSelectedOption}) => {
    return (
        <Form.Control 
            value={selectedOption} 
            as="select" 
            onChange={(e) => {
                setIndex(parseInt(e.target.value));
                setSelectedOption && setSelectedOption(e.target.value);
            }}
        >
            <option disabled key="-1" value="-1">Wybierz notatkę...</option>
            {notes && notes.map((note, index) => (
                <option key={index} value={index}>{note.name}</option>
                ))}
        </Form.Control>
    );
};

export default Selector;