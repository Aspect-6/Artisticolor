const getElement = require('utils/shorten/getElement')
module.exports = {
    open: () => getElement('login-box').style.transform = 'scale(1)',
    close: () => {
        getElement('login-box').style.transform = 'scale(0)';   
    },
    email: () => {
        getElement('emailLabel').style.transform = 'translateY(-200%)';
        getElement('emailLabel').style.transition = '0.25s';
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
    },
    deselect: () => {
        if (getElement('email').value == '') {
            getElement('emailLabel').style.transform = 'translateY(-50%)';
        }
        if (getElement('password').value == '') {
            getElement('passwordLabel').style.transform = 'translateY(-50%)';
        }
    },
    addListeners: () => {
        //Text fields
        getElement('email').addEventListener('focus', module.exports.email)
        getElement('email').addEventListener('blur', module.exports.deselect)
        getElement('password').addEventListener('focus', module.exports.password)
        getElement('password').addEventListener('blur', module.exports.deselect)
        //Open/close login-box
        getElement('lgnButton').addEventListener('focus', module.exports.open)
        getElement('close').addEventListener('focus', module.exports.close)
    }
}