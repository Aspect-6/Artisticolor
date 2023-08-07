import { forwardRef } from "react"

interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export default forwardRef(function FormError({ children, ...props }: FormErrorProps) {
	return (
		<div style={{ color: '#dc3545' }} {...props}>
			{children}
		</div>
	)
})
