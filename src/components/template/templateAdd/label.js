import Form from 'react-bootstrap/Form';

const Label = ({list, setList, categoryIndex, index}) => {
    const handleChange = (e) => {
        var newList = [...list];
        newList[categoryIndex].labels[index] = {name: e.target.value};
        setList(newList);
    };

    return (
        <Form.Control
            type="text" 
            value={list[categoryIndex].labels[index].name}
            className="text-center my-5 addNoteTitle" 
            placeholder="Wpisz nazwę pola..."
            onChange={(e) => handleChange(e)}
        />
    );
};

export default Label;