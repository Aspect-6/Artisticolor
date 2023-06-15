const CryptoJS = require('crypto-js')

module.exports = {
    encrypt(data: string[], key: string): string[] {
        return data.map(data => CryptoJS.AES.encrypt(data, key).toString())
    },
    decrypt(data: string, key: string): string {
        return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
    },
    generateKey(): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charsLen = chars.length;
        const randlen = Math.floor((Math.random() * 15) + 10)
        let result = ' ';
        for (let i = 0; i < randlen; i++) result += chars.charAt(Math.floor(Math.random() * charsLen));
        return result;
    }
}