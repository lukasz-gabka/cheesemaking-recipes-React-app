import Button from 'react-bootstrap/Button';

const AddCategoryButton = ({list, setList}) => {
    const handleAddCategory = () => {
        var newList = [...list];
        newList.push({name: ''});
        setList(newList);
    };

    return (
        <Button type="button" className="addCategoryItem" onClick={() => handleAddCategory()}>
            Dodaj kategorię
        </Button>
    );
};

export default AddCategoryButton;