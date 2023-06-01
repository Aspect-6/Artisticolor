const db = require('@firebase/database')
module.exports = {
    get: db.get,
    set: db.set,
    ref: db.ref,
    getDatabase: db.getDatabase
}