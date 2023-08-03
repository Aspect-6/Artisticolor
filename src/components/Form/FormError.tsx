interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	Ref: React.MutableRefObject<HTMLDivElement>
}

export default function FormError({ children, Ref, ...props }: FormErrorProps) {
	return (
		<div ref={Ref} style={{ color: '#dc3545' }} {...props}>
			{children}
		</div>
	)
}
