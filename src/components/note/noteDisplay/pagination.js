import '../../../stylesheets/selector.css';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Selector from '../selector';

const NotePagination = ({notes, index, lastIndex, setIndex }) => {
    const [isFirstDisabled, setIsFirstDisabled] = useState(false);
    const [isLastDisabled, setIsLastDisabled] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    const handleClick = (value) => {
        setIndex(value);
        setSelectedOption(value);
    };

    useEffect(() => {
        if (index === 0) {
            setIsFirstDisabled(true);
        } else {
            setIsFirstDisabled(false);
        }

        if  (index === lastIndex) {
            setIsLastDisabled(true);
        } else {
            setIsLastDisabled(false);
        }
    }, [index, lastIndex])

    return (
        <Pagination className="justify-content-center">
            <Pagination.Item 
                className="paginationIcon"
                disabled={isFirstDisabled} 
                onClick={() => handleClick(0)}
            >
                &#x0226A;
            </Pagination.Item>

            <Pagination.Item 
                className="paginationIcon"
                disabled={isFirstDisabled}
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
                className="paginationIcon"
                disabled={isLastDisabled}
                onClick={() => handleClick(index + 1)}
            >
                {'>'}
            </Pagination.Item>

            <Pagination.Item 
                className="paginationIcon"
                disabled={isLastDisabled}
                onClick={() => handleClick(lastIndex)}
            >
                &#x0226B;
            </Pagination.Item>
        </Pagination>
    );
};

export default NotePagination;