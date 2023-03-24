import { //Firebase variables
	firebaseConfig,
	app,
	database,
	databaseRef,
	auth,
} from './firebaseConfig.js';
import { // Firebase functions
	initializeApp,
    getDatabase,
    ref,
    set,
    get,
    child,
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from './firebaseConfig.js';

onAuthStateChanged(auth, (user) => {
    if(user) { 
        console.log(user);

        const navBar = document.getElementById('navigation');

        //Create something to display user's username on
        const aElement = document.createElement('a');
        aElement.setAttribute('id', 'displayName');
        aElement.classList.add('userDisplay')

        updateProfile(user, { photoURL: 'http://127.0.0.1:5500/usercon.png' });

        //Create a place to display user's profile photo
        //const imgElement = document.getElementById('userIcon');
        //imgElement.setAttribute('src', user.photoURL);
       
        document.getElementById('lgnButton').remove();
        aElement.textContent = user.displayName;
        navBar.appendChild(aElement);
        
    } else {
        //Sign in user when login button is pressed
        document.getElementById('login-box').style.transform = 'scale(0)';

        document.getElementById('login').addEventListener('click', (e) => {
            e.preventDefault();
            
            //Get the email and password input boxes
            const email = document.getElementById('email');
            const password = document.getElementById('password');

            if(email == '' || password == '') {
                return;
            }

            signInWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {

                const user = userCredential.user;
                
                const close = document.getElementById('close');
                close.click();
            
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                //Shake input boxes and display error message
                email.classList.add('error');
                setTimeout((e) => { email.classList.remove('error') }, 500);
                password.classList.add('error');
                setTimeout((e) => { password.classList.remove('error') }, 500);

                document.getElementById('message').innerHTML = 'Invalid email or password';
            });
        });
    }
})

document.getElementById('lgnButton').addEventListener('click', function() {
    document.getElementById('login-box').style.transform = 'scale(1)';
});
document.getElementById('close').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-box').style.transform = 'scale(0)';
});

//Move the label up when the input box is selected
document.getElementById('email').addEventListener('focus', function() {
    document.getElementById('emailLabel').style.transform = 'translateY(-200%)';
    document.getElementById('emailLabel').style.transition = '0.25s';
    if(document.getElementById('password').value == '') {
        document.getElementById('passwordLabel').style.transform = 'translateY(-50%)';
    }  
});
document.getElementById('password').addEventListener('focus', function() {
    document.getElementById('passwordLabel').style.transform = 'translateY(-200%)';
    document.getElementById('passwordLabel').style.transition = '0.25s';
    if(document.getElementById('email').value == '') {
        document.getElementById('emailLabel').style.transform = 'translateY(-50%)';
    } 
});