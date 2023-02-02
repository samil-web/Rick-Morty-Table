import { Modal, Button } from "react-bootstrap";
import "./Modal.css"
export default function ModalElement({ modalIsOpen, modalData, closeModal }) {
    return (
        <div className="modal">
            <Modal
                // style={{ backgroundColor: 'gray', textAlign: 'center', width: '300px' }}
                show={modalIsOpen}
                onHide={closeModal}
                keyboard={false}
                style={modalIsOpen ? { backgroundColor: 'gray' } : { backgroundColor: '' }}
            >
                <Modal.Body>
                    <p>{modalData.id}</p>
                    <p>{modalData.name}</p>
                    <p>{modalData.year}</p>
                    <p>{modalData.color}</p>
                    <p>{modalData.pantone_value}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
