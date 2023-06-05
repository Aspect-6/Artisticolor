const fb = require('firebasedb/exports')
const getElement = require('utils/shorten/getElement')

module.exports = {
    createUser(auth, email, username, password) {
        fb.createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                
                const KEY = require('utils/crypto/generateKey')();

                //Encrypt user data
                const encryptedData = require('utils/crypto/encrypt')([
                    email.value,
                    username.value,
                    password.value,
                ], KEY)
                
                // Set user displayName and photoURL
                fb.updateProfile(user, {
                    displayName: username.value,
                    photoURL: 'http://localhost:8000/icons/usercon.png'
                });

                // Add encrypted data to database along with key
                fb.set(fb.ref(db, `Users/${user.uid}`), {
                    Email: encryptedData[0],
                    Username: encryptedData[1],
                    Password: encryptedData[2],
                    Key: KEY
                });

                //Redirect
                location.href = '.profile.html'
            })
            .catch((error) => {
                const errorcode = error.code
                
                if(errorcode == 'auth/invalid-email') {
                    message.innerHTML = 'Please enter a valid email';
                    require('error/shake')(email)
                }
                if(errorcode == 'auth/email-already-in-use') {
                    message.innerHTML = 'Email is currently in use'
                    require('error/shake')(email)
                }
                if(errorcode == 'auth/weak-password') {
                    message.innerHTML = 'Password should be at least 6 characters'
                    require('error/shake')(password)
                }
            });
    },
    signIn(auth, email, password) { 
        fb.signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => require('utils/anim/login/box').close())
            .catch(() => {
            //Shake input boxes
            require('error/shake')(email, password)
            
            //Display error message
            document.getElementById('message').innerHTML = 'Invalid email or password';
        });
    },

    signOut(auth) {
        document.body.innerHTML += require('lib/templates/login-box');
        getElement('navigation').innerHTML += '<button id="lgnButton" class="btnLogin">Login</button>';
        fb.signOut(auth).then(location.href = 'index.html');
    },

    async decryptCredentials(uid) {
        return [
            (await fb.get(fb.ref(db, `Users/${uid}/Password`))).val(),
            (await fb.get(fb.ref(db, `Users/${uid}/Key`))).val()
        ]
    }
}