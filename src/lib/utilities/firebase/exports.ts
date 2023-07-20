const app = require('firebasedb/functions/app')
//@ts-expect-error
const auth = require('firebasedb/functions/auth')
//@ts-expect-error
const db = require('firebasedb/functions/db')
//Initialize Firebase

module.exports = {
	...auth,
	...db,
	auth: auth.getAuth(app),
	db: db.getDatabase(app),
}