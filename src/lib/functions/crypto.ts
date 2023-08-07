import CryptoJS from "crypto-js"

export default {
    /**
     * @param data - Array of strings that are to be encrypted
     * @param key - The encryption key used to encrypt all the items in `data`
     * @returns Array of encrypted strings
     */
    encrypt(data: string[], key: string): string[] {
        return data.map((data) => CryptoJS.AES.encrypt(data, key).toString())
    },
    /**
     * @param data - String to be decrypted
     * @param key - The encryption key to decrypt `data`
     * @returns Decrypted string
     */
    decrypt(data: string, key: string): string {
        return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
    },
    /**
     * @returns Randomly generated string of numbers and letters to encrypt and decrypt data
     */
    generateKey(): string {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        const charsLen = chars.length
        const randlen = Math.floor(Math.random() * 15 + 10)
        let result = " "
        for (let i = 0; i < randlen; i++)
            result += chars.charAt(Math.floor(Math.random() * charsLen))
        return result
    },
}
