module.exports = document.getElementById('logout').addEventListener('click', () => {
    document.body.innerHTML += require('lib/templates/login-box');
    document.getElementById('displayName').remove();
    document.getElementById('navigation').innerHTML += '<button id="lgnButton" class="btnLogin">Login</button>';
    signOut(auth).then(location.href = 'index.html');
});
