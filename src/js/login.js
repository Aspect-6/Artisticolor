require('../index').init();

onAuthStateChanged(auth, (user) => {
    if(user) {
        console.log(user);
        
        //Create element to display user's username
        const userDisplay = `<a id="displayName" class="userDisplay">
        ${user.displayName + require('lib/templates/user-dropdown.js')}</a>`

        //Display user display name
        getElement('lgnButton').remove();
        getElement('navigation').innerHTML += userDisplay
    } else {
        //Add login box and its eventListeners to the page
        document.body.innerHTML += require('lib/templates/login-box')
        require('anim/login/box').addListeners()
        
        //Sign in user when login button is pressed
        getElement('login-box').style.transform = 'scale(0)';

        //If login button pressed then login the user
        getElement('login').addEventListener('click', (e) => {
            e.preventDefault();
            require('utils/user/signInUser')(auth, getElement('email'), getElement('password'))
        });
    }
});

//Load Styles
require('styles/lgnregBox.scss')