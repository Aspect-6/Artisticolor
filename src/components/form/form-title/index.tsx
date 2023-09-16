interface FormTitleProps {
	children: React.ReactNode
	className?: string
}

export default function FormTitle({ children, className }: FormTitleProps) {
	return (
		<div className={'text-center '.concat(className)}>{children}</div>
	)
}
