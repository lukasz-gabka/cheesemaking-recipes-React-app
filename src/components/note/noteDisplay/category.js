import Label from "./label";

const Category = ({content}) => (
    <div className="mb-4">
        <h2 className="mb-3 title">{content.name}</h2>
        {content.labels.map((label, index) => <Label key={index} content={label}/>)}
    </div>
);

export default Category;