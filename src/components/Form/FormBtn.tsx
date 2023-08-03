interface FormBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export default function FormBtn({ children, ...props }: FormBtnProps) {
	return (
		<div className='d-grid'>
			<button {...props}>{children}</button>
		</div>
	)
}
