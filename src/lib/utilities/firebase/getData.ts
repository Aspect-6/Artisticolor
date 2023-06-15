const data = require('firebasedb/functions/db')
module.exports = async (uid: string) => [
    (await data.get(data.ref(db, `Users/${uid}/Password`))).val(),
    (await data.get(data.ref(db, `Users/${uid}/Key`))).val()
]