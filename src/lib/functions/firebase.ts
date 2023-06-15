//@ts-expect-error
const fb = require('firebasedb/exports')

module.exports = {
   async getData(uid: string) { 
        return [
            (await fb.get(fb.ref(fb.db, `Users/${uid}/Password`))).val(),
            (await fb.get(fb.ref(fb.db, `Users/${uid}/Key`))).val()
        ]
    }
}