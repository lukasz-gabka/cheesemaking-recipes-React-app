import Label from "./label";

const CategoryAdd = ({content, inputs, categoryNumber, setInputs}) =>{
    var inputNumber = 1;
    return (
        <div className="mb-5">
            <h2 className="mb-3">{content.name}</h2>
            {content.labels.map((label, index) => (
                <Label 
                    categoryNumber={categoryNumber} 
                    inputNumber={inputNumber++} 
                    key={index} 
                    inputs={inputs} 
                    setInputs={setInputs}
                    content={label} 
                />
            ))}
        </div>
    );
};

export default CategoryAdd;