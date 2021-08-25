import Label from "./label";

const Category = ({content}) =>{
    return (
        <div className="mb-5">
            <h2 className="mb-3">{content.name}</h2>
            {content.labels.map((label, index) => <Label key={index} content={label}/>)}
        </div>
    );
};

export default Category;