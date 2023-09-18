interface ModalTitle extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function ModalTitle({ children, ...props }: ModalTitle) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}