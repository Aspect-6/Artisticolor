interface FormRedirectProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
    nonAnchorText?: string
    divClassName: string
}

export default function FormRedirect({
	children,
    nonAnchorText,
    divClassName,
	...props
}: FormRedirectProps) {
	return (
		<div className={divClassName}>
			{nonAnchorText}
			<a {...props}>{children}</a>
		</div>
	)
}
