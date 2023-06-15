module.exports = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLen = chars.length;
    const randlen = Math.floor((Math.random() * 15) + 10)
    let result = ' ';
    for (let i = 0; i < randlen; i++) result += chars.charAt(Math.floor(Math.random() * charsLen));
    return result;
}