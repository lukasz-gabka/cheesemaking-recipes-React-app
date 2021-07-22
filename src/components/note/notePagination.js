import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import NoteSelector from './noteSelector';

const NotePagination = ({notes, index, lastIndex, setIndex }) => {
    const [isFirstDisabled, setIsFirstDisabled] = useState(false);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isLastDisabled, setIsLastDisabled] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

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
                onClick={() => {
                    setIndex(0);
                    setSelectedOption(0);
                }}
            >
                {'<<'}
            </Pagination.Item>

            <Pagination.Item 
                disabled={isPreviousDisabled}
                onClick={() => {
                    setIndex(index - 1);
                    setSelectedOption(index - 1);
                }}
            >
                {'<'}
            </Pagination.Item>

            <NoteSelector 
                notes={notes} 
                selectedOption={selectedOption} 
                setIndex={setIndex} 
                setSelectedOption={setSelectedOption} 
            />

            <Pagination.Item 
                disabled={isNextDisabled}
                onClick={() => {
                    setIndex(index + 1);
                    setSelectedOption(index + 1);
                }}
            >
                {'>'}
            </Pagination.Item>

            <Pagination.Item 
            disabled={isLastDisabled}
                onClick={() => {
                    setIndex(lastIndex);
                    setSelectedOption(lastIndex);
                }}
            >
                {'>>'}
            </Pagination.Item>
        </Pagination>
    );
};

export default NotePagination;