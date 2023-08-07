/**
 * User which gets stored in firestore database
 */
interface FirestoreUser {
    email: string
    username: string
    password: string
    key: string
}
/**
 * Keys of `FirestoreUser` interface allowed to be decrypted with `Crypto.decrypt()` utility function
 */
type FirestoreUserValidKeys = keyof Omit<FirestoreUser, "key">
