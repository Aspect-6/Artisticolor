interface FieldErrorProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export default function FieldError({ children, ...props }: FieldErrorProps) {
	return (
		<div className='invalid-feedback' {...props}>
			{children}
		</div>
	)
}
