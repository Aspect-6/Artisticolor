import { db, get, ref } from '@lib/functions/database'

module.exports = async (uid: string) => [
	(await get(ref(db, `Users/${uid}/Password`))).val(),
	(await get(ref(db, `Users/${uid}/Key`))).val(),
]
