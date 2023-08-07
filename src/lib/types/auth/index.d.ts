/**
 * User which gets stored in firestore database
*/
interface FirestoreUser {
    email: string
    username: string
    password: string
    key: string
}