interface EditBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function EditBtn({ ...props }: EditBtn) {
    return (
        <button type='button' {...props}>
            Edit
            <img
                src='./icons/edit.svg'
                alt='edit'
                className='ms-1 mb-1'
                style={{ height: "15px" }}
            />
        </button>
    )
}
