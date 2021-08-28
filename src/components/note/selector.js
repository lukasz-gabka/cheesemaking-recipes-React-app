import Form from 'react-bootstrap/Form';

const Selector = ({selectedOption, entities, setSelectedOption, setIndex}) => {
    return (
        <Form.Select 
            className="paginationElement selector"
            value={selectedOption} 
            onChange={(e) => {
                setIndex && setIndex(parseInt(e.target.value));
                setSelectedOption(e.target.value);
            }}
        >
            {entities && entities.map((entity, index) => (
                <option key={index} value={index}>{entity.name}</option>
                ))}
        </Form.Select>
    );
};

export default Selector;