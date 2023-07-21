const db = require('@firebase/database')
export default {
    get: db.get,
    set: db.set,
    ref: db.ref,
    getDatabase: db.getDatabase
}