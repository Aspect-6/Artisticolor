const app = require('@firebase/functions/app')
//@ts-expect-error
const auth = require('@firebase/functions/auth')
//@ts-expect-error
const db = require('@firebase/functions/db')

// Initialize Firebase
module.exports = {
	...auth,
	...db,
	auth: auth.getAuth(app),
	db: db.getDatabase(app),
}
