import ModalBody from "./modal-body"
import ModalFooter from "./modal-footer"
import ModalHeader from "./modal-header"
import ModalTitle from "./modal-title"

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
Modal.Title = ModalTitle
Modal.Body = ModalBody
Modal.Footer = ModalFooter