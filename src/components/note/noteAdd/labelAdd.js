import Form from 'react-bootstrap/Form';

const LabelAdd = ({content}) =>{
    return (
        <div className="mb-3" >
            <h3 className="d-inline-block mx-5">
                {content.name}:
            </h3>

            <Form.Control type="text"  className="d-inline-block addNoteInput" />
        </div>
    );
};

export default LabelAdd;