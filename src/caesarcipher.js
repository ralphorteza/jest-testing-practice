const caesarCipher = function caesarCipherEncrypt() {

  // A helper function for encrypted. Takes the current character in the forEach loop
  // and pushes the encrypted character into the given array.
  const encryptHandler = function handlerForEncrypt(char, shifted, encryptedArr) {
    const alphaChars = /[a-zA-z]/;
    const capitalChars = /[A-Z]/;
    const MODULO_VALUE = 26;
    const CAP_A_UTF_VALUE = 65;
    const LOW_A_UTF_VALUE = 97;

    if (!char.match(alphaChars)) {
      encryptedArr.push(String.fromCharCode(char.charCodeAt(0)));
      return;
    }

    if (char.match(capitalChars)) {
      let charCode = (char.charCodeAt(0)) - CAP_A_UTF_VALUE;
      let modifiedCharCode = ((charCode + shifted) % MODULO_VALUE) + CAP_A_UTF_VALUE;
      encryptedArr.push(String.fromCharCode(modifiedCharCode));
      return;
    }

    let charCode = (char.charCodeAt(0)) - LOW_A_UTF_VALUE;
    let modifiedCharCode = ((charCode + shifted) % MODULO_VALUE) + LOW_A_UTF_VALUE;
    encryptedArr.push(String.fromCharCode(modifiedCharCode));
  };

  // encrypt takes a string and an integer to to return an encrypted string.
  const encrypt = function encryptString(str, shift) {
    if (str === null || shift === null) return null;
    if (str === undefined || shift === undefined) return undefined;
    
    const MODULO_VALUE = 26;
    const shifted = shift % MODULO_VALUE;
    const processedStr = str.trim();
    const charArray = [...processedStr];
    const encryptedArr = [];

    charArray.forEach((char) =>  encryptHandler(char, shifted, encryptedArr));
    
    return encryptedArr.join('');
  } 

  return {
    encrypt,
  }
}();

module.exports = caesarCipher;