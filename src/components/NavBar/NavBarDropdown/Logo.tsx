import { ROUTES } from "@config/browser-routes.config";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Logo({ ...props }: LogoProps) {
	return (
		<a className='navbar-brand' href={ROUTES.DOMAIN}>
			<img src={`${ROUTES.ICONS}/Logo.png`} alt='Website Logo' {...props} />
		</a>
	)
}
