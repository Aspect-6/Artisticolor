// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
import Header from '../Header/Header'
import LoginBox from '../LoginBox/LoginBox'

export function renderHeader(
	currentURL: string,
	authState: { displayName: string } | null
) {
	//Determine urls and pageNames to be passed into Header component
	let pageNames

	if (currentURL == 'http://localhost:8000/') {
		pageNames = ['Projects', 'Profile']
	} else if (currentURL.includes('profile')) {
		pageNames = ['Home', 'Projects']
	} else if (currentURL.includes('projects')) {
		pageNames = ['Home', 'Profile']
	}

	const urls = pageNames.map((page) =>
		page === 'Home' ? 'index.html' : page.toLowerCase().concat('.html')
	)

	//Check user authState
	return (
		<Header
			isLoggedIn={authState ? true : false}
			username={authState && authState.displayName}
			urls={urls}
			pageNames={pageNames}
		/>
	)
}
