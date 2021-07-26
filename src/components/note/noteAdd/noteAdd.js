import CategoryAdd from "./categoryAdd";

const NoteAdd = ({content}) =>{
    return (
        <>
            {content && 
                <>
                    <h1 className="text-center" >{content.name}</h1>
                    {content.categories.map((category, index) => 
                        <CategoryAdd key={index} content={category} />
                    )}
                </>
            }   
        </>
    );
};

export default NoteAdd;