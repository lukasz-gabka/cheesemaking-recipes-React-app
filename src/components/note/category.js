import Label from "./label";

const Category = ({content, inputs, categoryNumber, setInputs}) =>{
    var inputNumber = 1;
    return (
        <div className="mb-5">
            <p className="mb-3 title">{content.name}</p>
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

export default Category;