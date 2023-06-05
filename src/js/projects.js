require('../').init();

getElement('makeProjectBtn').addEventListener('click', () => {
    console.log('Hello World')
});

//Load styles
require('styles/lgnregBox.scss'), require('styles/nav.scss'), require('styles/projects.scss')