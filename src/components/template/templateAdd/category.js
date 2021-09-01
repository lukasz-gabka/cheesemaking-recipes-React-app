import '../../../stylesheets/form.css';
import Form from 'react-bootstrap/Form';

const Category = ({list, setList, index}) => {
    return (
        <Form.Control
            type="text" 
            value={list[index].name}
            className="text-center my-5 addEntityInput fextField" 
            placeholder="Wpisz nazwę kategorii..."
            onChange={(e) => {
                var newList = [...list];
                newList[index].name = e.target.value;
                setList(newList);
            }}
        />
    );
};

export default Category;