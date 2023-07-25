export default function SignUpBtn() {
	return (
		<div className='d-grid'>
			<button
				type='button'
				onClick={() => (location.href = './register.html')}
				className='btn btn-primary px-3'
			>
				No Account? Sign Up
			</button>
		</div>
	)
}
