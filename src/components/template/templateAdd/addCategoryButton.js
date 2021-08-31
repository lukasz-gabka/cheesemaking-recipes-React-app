import Button from 'react-bootstrap/Button';

const AddCategoryButton = ({list, setList}) => {
    const handleAddCategory = () => {
        var newList = [...list];
        newList.push({name: ''});
        setList(newList);
    };

    return (
        <Button type="button" className="mb-5 addCategoryItem navButton button" onClick={() => handleAddCategory()}>
            Dodaj kategorię
        </Button>
    );
};

export default AddCategoryButton;