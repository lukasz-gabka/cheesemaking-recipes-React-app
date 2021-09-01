import '../stylesheets/modal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteModal = ({isModal, setIsModal, id, history, action}) => (
    <Modal
        show={isModal}
        onHide={() => setIsModal(false)}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Usuwanie notatki</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Czy jesteś pewien? Ta operacja jest nieodwracalna!
        </Modal.Body>

        <Modal.Footer>
            <Button className="mx-1 navButton button" onClick={() => setIsModal(false)}>
                Nie usuwaj
            </Button>

            <Button 
                className="mx-1 navButton button deleteButton" 
                onClick={() => action(id, history)}
            >
                Usuń
            </Button>
        </Modal.Footer>
    </Modal>
);

export default DeleteModal;
