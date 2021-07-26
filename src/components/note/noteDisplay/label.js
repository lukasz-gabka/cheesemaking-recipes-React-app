const Label = ({content}) =>{
    return (
        <div className="mb-3" >
            <h3 className="d-inline mx-5">
                {content.name}:
            </h3>

            <h4 className="d-inline">
                {content.input.value}
            </h4>
        </div>
    );
};

export default Label;