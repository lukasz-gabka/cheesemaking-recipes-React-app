const Label = ({label}) => {
    return (
        <p className="mx-4 displayedInput">{label.name}: {label.input.value}</p>
    );
};

export default Label;