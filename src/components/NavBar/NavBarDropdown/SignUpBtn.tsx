import { ROUTES } from "@config/browser-routes.config";

export default function SignUpBtn() {
	return (
		<div className='d-grid'>
			<button
				type='button'
				onClick={() => (location.href = ROUTES.REGISTER)}
				className='btn btn-primary px-3'
			>
				No Account? Sign Up
			</button>
		</div>
	)
}
