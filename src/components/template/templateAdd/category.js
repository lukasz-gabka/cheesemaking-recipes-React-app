import Form from 'react-bootstrap/Form';

const Category = ({list, setList, name}) => {
    return (
        <Form.Control 
            type="text" 
            value={list[name].name}
            className="text-center my-5 addNoteTitle" 
            placeholder="Wpisz nazwę kategorii..."
            onChange={(e) => {
                setList({...list, [name]: {...list[name], name: e.target.value}});
            }}
        />
    );
};

export default Category;