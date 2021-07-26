import LabelAdd from "./labelAdd";

const CategoryAdd = ({content}) =>{
    return (
        <div className="mb-5">
            <h2 className="mb-3">{content.name}</h2>
            {content.labels.map((label, index) => <LabelAdd key={index} content={label} />)}
        </div>
    );
};

export default CategoryAdd;