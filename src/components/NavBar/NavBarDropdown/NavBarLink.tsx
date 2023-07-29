interface NavBarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string
}

export default function NavBarLink({ text, ...props }: NavBarLinkProps) {
	return (
		<li className='nav-item'>
			<a className='nav-link fs-5 px-2' {...props}>
				{text}
			</a>
		</li>
	)
}
