import ReactLoading from 'react-loading';

const Loading = () => {
    return (
    <div id="loading">
        <ReactLoading id="spinner" type="spinningBubbles" color="#000000" height={100}  width={100} />
        <p>WCZYTYWANIE</p>
    </div>
    );
}

export default Loading;