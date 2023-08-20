interface ModalBody extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function ModalBody({ children, ...props }: ModalBody) {
    return (
        <div className='modal-body' {...props}>
            {children}
        </div>
    )
}
