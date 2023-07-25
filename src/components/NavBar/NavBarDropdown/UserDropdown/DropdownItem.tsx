interface DropdownItemProps {
	text: string
}

export default function DropdownItem({ text }: DropdownItemProps) {
	return (
		<li>
			<a className='dropdown-item' href='#'>
				{text}
			</a>
		</li>
	)
}
