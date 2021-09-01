import Category from "./category";

const Note = ({content}) => (
    <>
        <h1 className="text-center mt-5 mb-3 title" >{content.name}</h1>
        {content.template.categories.map((category, index) => 
            <Category key={index} content={category} />)}
    </>
);

export default Note;