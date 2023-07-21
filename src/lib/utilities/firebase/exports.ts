import app from '@firebase/functions/app'
import auth from '@firebase/functions/auth'
import db from '@firebase/functions/db'

//Initialize Firebase
export default {
	...auth,
	...db,
	auth: auth.getAuth(app),
	db: db.getDatabase(app),
}
