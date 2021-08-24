import Form from 'react-bootstrap/Form';

const Label = ({list, setList, categoryName, name}) => {
    const handleChange = (e) => {
        var newList = {...list};
        newList[categoryName].labels[name] = {name: e.target.value};
        setList(newList);
    };

    return (
        <Form.Control 
            type="text" 
            value={list[categoryName].labels[name].name}
            className="text-center my-5 addNoteTitle" 
            placeholder="Wpisz nazwę pola..."
            onChange={(e) => handleChange(e)}
        />
    );
};

export default Label;