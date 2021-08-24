import Button from 'react-bootstrap/Button';

const AddCategoryButton = ({list, setList}) => {
    const handleAddCategory = () => {
        const length = Object.keys(list).length;
        const name = 'cat' + length;
        setList({...list, [name]: {name: ''}});
    };

    return (
        <Button type="button" className="addCategoryItem" onClick={() => handleAddCategory()}>
            Dodaj kategorię
        </Button>
    );
};

export default AddCategoryButton;