//@ts-expect-error
import { getElement } from 'utils/shorten/getElement'

module.exports = {
    email: () => {
        getElement('emailLabel').style.transform = 'translateY(-200%)';
        getElement('emailLabel').style.transition = '0.25s';

        if (getElement('username').value == '') {
            getElement('usernameLabel').style.transform = 'translateY(-50%)';
        }
        if (getElement('password').value == '') {
            getElement('passwordLabel').style.transform = 'translateY(-50%)';
        }
    },
    username: () => {
        getElement('usernameLabel').style.transform = 'translateY(-200%)';
        getElement('usernameLabel').style.transition = '0.25s';

        if (getElement('email').value == '') {
            getElement('emailLabel').style.transform = 'translateY(-50%)';
        }
        if (getElement('password').value == '') {
            getElement('passwordLabel').style.transform = 'translateY(-50%)';
        }
    },
    password: () => {
        getElement('passwordLabel').style.transform = 'translateY(-200%)';
        getElement('passwordLabel').style.transition = '0.25s';

        if (getElement('email').value == '') {
            getElement('emailLabel').style.transform = 'translateY(-50%)';
        }
        if (getElement('username').value == '') {
            getElement('usernameLabel').style.transform = 'translateY(-50%)';
        }
    },
    deselect: () => {
        if (getElement('email').value == '') {
            getElement('emailLabel').style.transform = 'translateY(-50%)';
        }
        if (getElement('username').value == '') {
            getElement('usernameLabel').style.transform = 'translateY(-50%)';
        }
        if (getElement('password').value == '') {
            getElement('passwordLabel').style.transform = 'translateY(-50%)';
        }
    },
    addListeners: () => {
        //Text fields
        getElement('email').addEventListener('focus', module.exports.email)
        getElement('email').addEventListener('blur', module.exports.deselect)

        getElement('username').addEventListener('focus', module.exports.username)
        getElement('username').addEventListener('blur', module.exports.deselect)
        
        getElement('password').addEventListener('focus', module.exports.password)
        getElement('password').addEventListener('blur', module.exports.deselect)
    }
}