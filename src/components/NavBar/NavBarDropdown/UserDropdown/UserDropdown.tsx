interface UserDropdownProps {
	displayName: string
	children: React.ReactNode
}

export default function UserDropdown({ displayName, children }: UserDropdownProps) {
	return (
		<li className='nav-item fs-5 px-1 dropdown'>
			<a
				className='nav-link dropdown-toggle'
				href='#'
				role='button'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				{displayName}
			</a>
			<ul className='dropdown-menu dropdown-menu-end bg-body-tertiary'>
				{children}
			</ul>
		</li>
	)
}
