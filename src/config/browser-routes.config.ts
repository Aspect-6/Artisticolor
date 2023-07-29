const PORT = 8000
const DOMAINNAME = 'localhost'
const DOMAIN = `http://${DOMAINNAME}:${PORT}`
export const ROUTES = {
	DOMAIN: DOMAIN,
	INDEX: `${DOMAIN}/index.html`,
	PROFILE: `${DOMAIN}/profile.html`,
	PROJECTS: `${DOMAIN}/projects.html`,
	REGISTER: `${DOMAIN}/register.html`,
	ICONS: `${DOMAIN}/icons`,
}
