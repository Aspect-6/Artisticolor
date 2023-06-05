require('../').init();

onAuthStateChanged(auth, (userData) => {
    if(userData) {
        console.log(userData);

        //Display user display name
        getElement('lgnButton').remove();
        getElement('navigation').innerHTML += `<a id="displayName" class="userDisplay">
        ${userData.displayName + require('lib/templates/user-dropdown')}</a>`
    } else {
        //Add login box and its eventListeners to the page
        document.body.innerHTML += require('lib/templates/login-box')
        require('anim/login/box').addListeners()
        
        //Sign in user when login button is pressed
        getElement('login-box').style.transform = 'scale(0)';

        //If login button pressed then login the user
        getElement('login').addEventListener('click', (e) => {
            e.preventDefault();
            user.signIn(auth, getElement('email'), getElement('password'))
        });
    }
});

//Load Styles
require('styles/lgnregBox.scss')