const bootstrap = {
	...require('bootstrap/scss/bootstrap.scss'),
	...require('bootstrap/dist/js/bootstrap.bundle.js'),
}

module.exports = {
	index: {
		...bootstrap,
		...require('@styles/index.scss'),
		...require('@styles/nav.scss'),
	},
	profile: {
		...bootstrap,
		...require('@styles/profile.scss'),
		...require('@styles/nav.scss'),
	},
	projects: {
		...bootstrap,
		...require('@styles/projects.scss'),
		...require('@styles/nav.scss'),
	},
	register: {
		...bootstrap,
		...require('@styles/register.scss'),
	},
}
