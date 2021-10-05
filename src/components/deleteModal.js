import '../stylesheets/modal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SubmitButton from './submitButton';

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

            <SubmitButton handleEvent={() => action(id, history)} name="Usuń" classString="mx-1 deleteButton" />
        </Modal.Footer>
    </Modal>
);

export default DeleteModal;
