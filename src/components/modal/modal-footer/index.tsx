interface ModalFooter extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function ModalFooter({ children, ...props }: ModalFooter) {
    return (
        <div className='modal-footer' {...props}>
            {children}
        </div>
    )
}
