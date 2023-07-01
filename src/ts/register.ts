//@ts-expect-error
import { getElement } from 'utils/shorten/getElement'

//Show register box
getElement('login-box').style.transition = '0s';
getElement('login-box').style.transform = 'scale(1)';
getElement('login-box').style.top = '0px';

//Get email, username, and password boxes
const email = getElement('email');
const username = getElement('username');
const password = getElement('password');

getElement('submit').addEventListener('click', () => {

	//Get message element
	const message = getElement('message');

	//Check for blank inputs
	if(email.value == '' || username.value == '' || password.value == '') return;

	//Check if username > 15 characters
	if(username.value.length > 10) {
		message.innerHTML = 'Username cannot exceed 10 characters';
		return;
	}	

	//@ts-expect-error | Create a user and add user to database
	user.createUser(auth, email, username, password)
});
require('utils/anim/register/box').addListeners()

//Load styles
require('styles/register.scss'), require('styles/lgnregBox.scss')