module.exports = (data: string[], key: string): string[] => data.map(data => require('crypto-js').AES.encrypt(data, key).toString())