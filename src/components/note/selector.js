import Form from 'react-bootstrap/Form';

const Selector = ({selectedOption, entities, setSelectedOption, setIndex, header}) => {
    return (
        <Form.Select 
            className="paginationElement selector"
            value={selectedOption} 
            onChange={(e) => {
                setIndex && setIndex(parseInt(e.target.value));
                setSelectedOption && setSelectedOption(e.target.value);
            }}
        >
            {header && <option disabled key="-1" value="-1">{header}</option>}
            {entities && entities.map((entity, index) => (
                <option key={index} value={index}>{entity.name}</option>
                ))}
        </Form.Select>
    );
};

export default Selector;