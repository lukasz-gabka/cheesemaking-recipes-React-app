import Button from 'react-bootstrap/Button';

const AddLabelButton = ({list, setList, categoryName}) => {
    const handleAddLabel = () => {
        const isLabel = list[categoryName]?.labels;
        if (isLabel) {
            const length = Object.keys(list[categoryName].labels).length;
            const name = "label" + length;
            var newList = {...list};
            newList[categoryName].labels[name] = {name: ''};
            setList(newList);
        } else {
            const name = "label0";
            newList = {...list};
            newList[categoryName].labels = {};
            newList[categoryName].labels[name] = {name: ''};
            setList(newList);
        }
    };

    return (
        <Button type="button" className="addCategoryItem" onClick={() => handleAddLabel()}>
            Dodaj pole
        </Button>
    );
};

export default AddLabelButton;