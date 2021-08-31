import Button from 'react-bootstrap/Button';

const AddLabelButton = ({list, setList, categoryIndex}) => {
    const handleAddLabel = () => {
        var newList = [...list];

        if (!newList[categoryIndex]?.labels) {
            newList[categoryIndex].labels = [];
        }

        newList[categoryIndex].labels.push({name: ''});
        setList(newList);
    };

    return (
        <Button type="button" className="addCategoryItem navButton button" onClick={() => handleAddLabel()}>
            Dodaj pole
        </Button>
    );
};

export default AddLabelButton;