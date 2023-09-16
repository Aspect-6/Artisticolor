interface DropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
}

export default function DropdownItem({ children, ...props }: DropdownItemProps) {
	return (
		<li>
			<a className='dropdown-item' {...props}>
				{children}
			</a>
		</li>
	)
}
