const Label = ({label}) => (
    <p className="mx-4 displayedInput">{label.name}: {label.input.value}</p>
);

export default Label;