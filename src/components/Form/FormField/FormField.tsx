interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export default function FormField({ children, ...props }: FormFieldProps) {
	return <div {...props}>{children}</div>
}
