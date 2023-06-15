const Db = require('@firebase/database')
module.exports = {
    get: Db.get,
    set: Db.set,
    ref: Db.ref,
    getDatabase: Db.getDatabase
}