const data = require('firebasedb/functions/db')
module.exports = async uid => [
    (await data.get(data.ref(db, `Users/${uid}/Password`))).val(),
    (await data.get(data.ref(db, `Users/${uid}/Key`))).val()
]