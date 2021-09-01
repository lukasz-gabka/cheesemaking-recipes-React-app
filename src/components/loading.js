import ReactLoading from 'react-loading';

const Loading = () => {
    return (
    <div id="loading">
        <ReactLoading 
            id="spinner" 
            type="spinningBubbles" 
            color="#f2a359" 
            height={130}  
            width={130} 
        />
    </div>
    );
}

export default Loading;