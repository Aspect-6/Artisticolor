interface NavBarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
}

export default function NavBarLink({ children, ...props }: NavBarLinkProps) {
	return (
		<li className='nav-item'>
			<a className='nav-link fs-5 px-2' {...props}>
				{children}
			</a>
		</li>
	)
}
