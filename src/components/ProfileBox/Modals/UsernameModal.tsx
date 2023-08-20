import Modal from "@components/Modal/Modal"
import { ACTIONS } from "../reducer"

export default function UsernameModal({ value, dispatch }: ModalProps) {
    return (
        <Modal
            className='modal fade'
            id='changeUsername'
            tabIndex={-1}
            aria-labelledby='modal-label'
            aria-hidden='true'
        >
            <Modal.Header
                className='modal-title fs-5 text-dark'
                id='modal-label'
            >
                Change username
            </Modal.Header>
            <Modal.Body>
                <input
                    type='text'
                    value={value}
                    onChange={(e) => dispatch({
                        type: ACTIONS.updatePassword,
                        payload: e.target.value,
                    })}
                    className='form-control'
                />
            </Modal.Body>
            <Modal.Footer>
                <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                >
                    Close
                </button>
                <button type='button' className='btn btn-primary'>
                    Save changes
                </button>
            </Modal.Footer>
        </Modal>
    )
}
