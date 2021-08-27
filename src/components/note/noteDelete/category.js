import Label from "./label";

const Category = ({category}) => (
    <>
        <p>{category.name}</p>
        {category.labels.map((label, index) => (
            <Label key={index} label={label} />
        ))}
    </>
);

export default Category;