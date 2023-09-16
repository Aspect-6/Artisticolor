import { ROUTES } from "@config/browser-routes.config";

export default function WebsiteName() {
	return (
		<a href={ROUTES.DOMAIN} className='navbar-brand fs-3'>
			Artisticolor
		</a>
	)
}
