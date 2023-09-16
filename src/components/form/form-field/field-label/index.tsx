interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
}

export default function FieldLabel({ children, ...props }: FieldLabelProps) {
	return (
		<label className='form-label' {...props}>
			{children}
		</label>
	)
}
