interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	Ref?: React.MutableRefObject<HTMLInputElement>
}

export default function FieldInput({ Ref, ...props }: FieldInputProps) {
	return (
		<input
			ref={Ref}
			{...props}
			className={'form-control '.concat(props.className)}
		/>
	)
}
