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
        document.getElementById('email').addEventListener('focus', module.exports.email)
        document.getElementById('email').addEventListener('blur', module.exports.deselect)
        document.getElementById('password').addEventListener('focus', module.exports.password)
        document.getElementById('password').addEventListener('blur', module.exports.deselect)
        //Open/close login-box
        document.getElementById('lgnButton').addEventListener('click', module.exports.open)
        document.getElementById('close').addEventListener('click', module.exports.close)
    }
}