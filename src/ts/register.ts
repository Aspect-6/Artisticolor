// // Show register box
// document.getElementById('login-box').style.transition = '0s'
// document.getElementById('login-box').style.transform = 'scale(1)'
// document.getElementById('login-box').style.top = '0px'

// //Get email, username, and password boxes
// const email = <HTMLInputElement>document.getElementById('email')
// const username = <HTMLInputElement>document.getElementById('username')
// const password = <HTMLInputElement>document.getElementById('password')

// document.getElementById('submit').addEventListener('click', () => {
// 	//Get message element
// 	const message = document.getElementById('message')

// 	//Check for blank inputs
// 	if (email.value == '' || username.value == '' || password.value == '')
// 		return

// 	//Check if username > 15 characters
// 	if (username.value.length > 10) {
// 		message.innerHTML = 'Username cannot exceed 10 characters'
// 		return
// 	}

// 	//@ts-expect-error | Create a user and add user to database
// 	user.createUser(auth, email, username, password)
// })
// require('@anim/register/box').addListeners()

//Load styles
require('@import_bundles/styles/register')
