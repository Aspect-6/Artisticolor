//Initialize app
const app = require('./functions/app')
//Import required firebase functions
const auth = require('./functions/auth')
const db = require('./functions/db')
//Initialize Firebase

module.exports = {
	...auth,
	...db,
	auth: auth.getAuth(app),
	db: db.getDatabase(app),
}