import { useState } from 'react';
import ReactLoading from 'react-loading';
import Button from 'react-bootstrap/Button';

const SubmitButton = ({handleEvent, name, classString}) => {
    const [loading, setLoading] = useState(false);
    const LOADING = (
        <ReactLoading 
            id="spinner" 
            type="spinningBubbles" 
            color="#000000" 
            height={24}  
            width={24} 
        />
    );
    var buttonTitle = loading ? LOADING : name;

    const handle = async (e) => {
        e.preventDefault();

        if (!loading) {
            setLoading(true);
            await handleEvent();
            setLoading(false);
        }
    }

    return (
        <Button className={"navButton button " + classString} type="submit" onClick={(e) => handle(e)}>
            {buttonTitle}
        </Button>
    );
};

export default SubmitButton;