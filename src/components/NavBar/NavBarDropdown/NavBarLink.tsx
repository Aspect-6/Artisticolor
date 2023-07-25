interface NavBarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	value: string
}

export default function NavBarLink({ value, ...props }: NavBarLinkProps) {
	return (
		<li className='nav-item'>
			<a className='nav-link fs-5 px-2' {...props}>
				{value}
			</a>
		</li>
	)
}
