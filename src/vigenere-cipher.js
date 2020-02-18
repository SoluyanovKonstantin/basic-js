class VigenereCipheringMachine {
    constructor(flag) {
        if (flag === false && flag != undefined) this.type = 'reverse';
        else this.type = 'direct';
    }

    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let str = '';
        let symbol = '';
        let j = 0;
        for (let i=0; i<message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                symbol = (message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26;
                str += String.fromCharCode(symbol + 65);
                if (j === key.length - 1) j = 0;
                else j++;
            } else {
                str += message[i];
            }
        }

        return this.type === 'direct' ? str : str.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let str = '';
        let symbol = '';
        let j = 0;
        for (let i=0; i<encryptedMessage.length; i++) {
            if (/[A-Z]/.test(encryptedMessage[i])) {
                symbol = (encryptedMessage.charCodeAt(i) - key.charCodeAt(j)) % 26;
                symbol < 0 ? symbol = 26 + symbol : false;
                str += String.fromCharCode(symbol + 65);
                if (j === key.length - 1) j = 0;
                else j++;
            } else {
                str += encryptedMessage[i];
            }
        }

        return this.type === 'direct' ? str : str.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
