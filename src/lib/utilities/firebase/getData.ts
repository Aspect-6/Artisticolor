const data = require('@firebase/exports')
module.exports = async (uid: string) => [
	(await data.get(data.ref(data.db, `Users/${uid}/Password`))).val(),
	(await data.get(data.ref(data.db, `Users/${uid}/Key`))).val(),
]
