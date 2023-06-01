//Initialize app
const app = require('firebasedb/functions/app')
//Import required firebase functions
const auth = require('firebasedb/functions/auth')
const db = require('firebasedb/functions/db')
//Initialize Firebase
module.exports = {
    ...auth,
    ...db,
    auth: auth.getAuth(),
    db: db.getDatabase(),
    //database: db.ref(db.getDatabase()),
}