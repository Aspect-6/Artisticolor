module.exports = `<form id="login-box" onsubmit="return false;" action="./profile.html">
    <h1>Login</h1>

    <button id="close" type="button"><img src="./icons/close.png" alt="close" height="35px"></button>

    <div class="wraps">
        <label id="emailLabel">Email</label>
        <input type="email" id="email" class="lgnBoxInput" autocomplete="email" >
    </div>

    <div class="wraps">
        <label id="passwordLabel">Password</label>
        <input type="password" id="password" class="lgnBoxInput" autocomplete="current-password">
    </div>

    <p id="message"></p>

    <button id="login" type="submit">Login &#8594;</button>

    <p>Don't have an account? <a href="register.html">Register</a></p>    
</form>`