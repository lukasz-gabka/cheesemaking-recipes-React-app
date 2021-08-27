const Label = ({content}) => (
    <div className="mb-3" >
        <h4 className="d-inline mx-5 title">
            {content.name}:
        </h4>

        <div className="d-inline-block">
        <h4 className="d-inline displayedInput">
            {content.input.value}
        </h4>
        </div>
    </div>
);

export default Label;