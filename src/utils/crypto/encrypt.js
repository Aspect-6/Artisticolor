module.exports = function encrypt(data, key) {
    const CryptoJS = require('crypto-js');
    return [
        CryptoJS.AES.encrypt(data[0], key).toString(),
        CryptoJS.AES.encrypt(data[1], key).toString(),
        CryptoJS.AES.encrypt(data[2], key).toString(),
    ]
}