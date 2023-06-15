const Auth = require('@firebase/auth')
module.exports = {
    getAuth: Auth.getAuth,
    signOut: Auth.signOut,
    updateProfile: Auth.updateProfile,
    onAuthStateChanged: Auth.onAuthStateChanged,
    signInWithEmailAndPassword: Auth.signInWithEmailAndPassword,
    createUserWithEmailAndPassword: Auth.createUserWithEmailAndPassword
}
