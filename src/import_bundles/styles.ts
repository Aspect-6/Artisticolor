const bootstrap = {
	...require('bootstrap/scss/bootstrap.scss'),
	...require('bootstrap/dist/js/bootstrap.bundle.js'),
}

module.exports = {
	index: {
		...require('styles/index.scss'),
		...require('styles/lgnregBox.scss'),
		...require('styles/nav.scss'),
		...bootstrap,
	},
	profile: {
		...require('styles/profile.scss'),
		...require('styles/lgnregBox.scss'),
		...require('styles/nav.scss'),
		...bootstrap,
	},
	projects: {
		...require('styles/projects.scss'),
		...require('styles/lgnregBox.scss'),
		...require('styles/nav.scss'),
		...bootstrap,
	},
	register: {
		...require('styles/register.scss'),
		...require('styles/lgnregBox.scss'),
		...bootstrap,
	},
}
