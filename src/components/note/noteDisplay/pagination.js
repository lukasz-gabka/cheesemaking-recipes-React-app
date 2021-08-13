import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Selector from '../selector';

const NotePagination = ({notes, index, lastIndex, setIndex }) => {
    const [isFirstDisabled, setIsFirstDisabled] = useState(false);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isLastDisabled, setIsLastDisabled] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    const handleClick = (value) => {
        setIndex(value);
        setSelectedOption(value);
    };

    useEffect(() => {
        if (index === 0) {
            setIsFirstDisabled(true);
            setIsPreviousDisabled(true);
        } else {
            setIsFirstDisabled(false);
            setIsPreviousDisabled(false);
        }

        if  (index === lastIndex) {
            setIsNextDisabled(true);
            setIsLastDisabled(true);
        } else {
            setIsNextDisabled(false);
            setIsLastDisabled(false);
        }
    }, [index, lastIndex])

    return (
        <Pagination className="justify-content-center">
            <Pagination.Item 
                disabled={isFirstDisabled} 
                onClick={() => handleClick(0)}
            >
                {'<<'}
            </Pagination.Item>

            <Pagination.Item 
                disabled={isPreviousDisabled}
                onClick={() => handleClick(index - 1)}
            >
                {'<'}
            </Pagination.Item>

            <Selector 
                entities={notes} 
                selectedOption={selectedOption} 
                setIndex={setIndex} 
                setSelectedOption={setSelectedOption} 
            />

            <Pagination.Item 
                disabled={isNextDisabled}
                onClick={() => handleClick(index + 1)}
            >
                {'>'}
            </Pagination.Item>

            <Pagination.Item 
            disabled={isLastDisabled}
                onClick={() => handleClick(lastIndex)}
            >
                {'>>'}
            </Pagination.Item>
        </Pagination>
    );
};

export default NotePagination;