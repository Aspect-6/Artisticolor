interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Logo({ ...props }: LogoProps) {
	return (
		<a className='navbar-brand' href='http://localhost:8000/'>
			<img src='./icons/Logo.png' alt='Website Logo' {...props} />
		</a>
	)
}
