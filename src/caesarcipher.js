const caesarCipher = function caesarCipherEncrypt() {

  // A helper function for encrypted. Takes the current character in the forEach loop
  // and pushes the encrypted character into the given array.
  const encryptHandler = function handlerForEncrypt(char, shifted, encryptedArr) {
    const alphaChars = /[a-zA-z]/
    const capitalChars = /[A-Z]/;

    if (!char.match(alphaChars)) {
      encryptedArr.push(String.fromCharCode(char.charCodeAt(0)));
      return;
    }

    if (char.match(capitalChars)) {
      let charCode = (char.charCodeAt(0)) - 65;
      let modifiedCharCode = ((charCode + shifted) % 26) + 65;
      encryptedArr.push(String.fromCharCode(modifiedCharCode));
      return;
    }

    let charCode = (char.charCodeAt(0)) - 97;
    let modifiedCharCode = ((charCode + shifted) % 26) + 97;
    encryptedArr.push(String.fromCharCode(modifiedCharCode));
  };

  // encrypt takes a string and an integer to to return an encrypted string.
  const encrypt = function encryptString(str, shift) {
    if (str === null || shift === null) return null;
    if (str === undefined || shift === undefined) return undefined;

    const shifted = shift % 26;
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