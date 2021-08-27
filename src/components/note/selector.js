import Form from 'react-bootstrap/Form';

const Selector = ({selectedOption, entities, setSelectedOption, setIndex}) => {
    return (
        <Form.Control 
            className="paginationElement selector"
            value={selectedOption} 
            as="select" 
            onChange={(e) => {
                setIndex && setIndex(parseInt(e.target.value));
                setSelectedOption(e.target.value);
            }}
        >
            {entities && entities.map((entity, index) => (
                <option key={index} value={index}>{entity.name}</option>
                ))}
        </Form.Control>
    );
};

export default Selector;