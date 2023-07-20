const auth = require('@firebase/auth')
export default {
    getAuth: auth.getAuth,
    signOut: auth.signOut,
    updateProfile: auth.updateProfile,
    onAuthStateChanged: auth.onAuthStateChanged,
    signInWithEmailAndPassword: auth.signInWithEmailAndPassword,
    createUserWithEmailAndPassword: auth.createUserWithEmailAndPassword
}
