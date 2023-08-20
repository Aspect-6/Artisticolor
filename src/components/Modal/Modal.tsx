import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

interface Modal extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function Modal({ children, ...props }: Modal) {
    return (
        <div {...props}>
            <div className='modal-dialog'>
                <div className='modal-content'>{children}</div>
            </div>
        </div>
    )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter