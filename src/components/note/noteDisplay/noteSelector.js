import Form from 'react-bootstrap/Form';

const NoteSelector = ({selectedOption, notes, setIndex, setSelectedOption}) => {
    return (
        <Form.Control 
            value={selectedOption} 
            as="select" 
            onChange={(e) => {
                setIndex(parseInt(e.target.value));
                setSelectedOption(e.target.value);
            }}
        >
            {notes && notes.map((note, index) => (
                <option key={index} value={index}>{note.name}</option>
                ))}
        </Form.Control>
    );
};

export default NoteSelector;