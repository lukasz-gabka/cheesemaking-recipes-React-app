import Category from "./category";

const Note = ({content}) =>{
    console.log(content);
    return (
        <>
            <h1 className="text-center" >{content.name}</h1>
            {content.template.categories.map((category, index) => 
                <Category key={index} content={category} />)}
        </>
    );
};

export default Note;