import { DocumentData, DocumentReference, setDoc } from "./firestore"

export default {
    async updateFirestoreUser(
        doc: DocumentReference<DocumentData, DocumentData>,
        data: Partial<FirestoreUser>
    ) {
        setDoc(doc, data, { merge: true })
    },
}
