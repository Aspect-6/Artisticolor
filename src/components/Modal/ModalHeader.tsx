interface ModalHeader extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

export default function ModalHeader({ children, ...props }: ModalHeader) {
    return (
        <div className='modal-header'>
            <h1
                className='modal-title fs-5 text-dark'
                id='exampleModalLabel'
                {...props}
            >
                {children}
            </h1>
            <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
            ></button>
        </div>
    )
}
