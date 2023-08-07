import { forwardRef } from "react"

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef(function FieldInput({ ...props }: FieldInputProps) {
	return (
		<input
			{...props}
			className={'form-control '.concat(props.className)}
		/>
	)
})
