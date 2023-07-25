interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: 'email' | 'username' | 'password'
	errorMessage: string
	Ref: React.LegacyRef<HTMLInputElement>
}

export default function FormInput({ type, errorMessage, Ref, ...props }: FormInputProps) {
	const capitalType = type[0].toUpperCase().concat(type.slice(1))
	const formId = 'form'.concat(capitalType)
	const label = type === 'email' ? 'Email Address' : capitalType
	const placeholder = type === 'email' ? 'email@example.com' : capitalType

	return (
		<div className='mb-3'>
			<label htmlFor={formId} className='form-label'>
				{label}
			</label>
			<input
				type={type}
				id={formId}
				placeholder={placeholder}
				ref={Ref}
				required
				{...props}
				className={'form-control '.concat(props.className)}
			/>
			<div className="invalid-feedback">{errorMessage}</div>
		</div>
	)
}
