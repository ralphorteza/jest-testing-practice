const caesarCipher = function caesarCipherEncrypt() {

  const encryptHandler = function handlerForEncrypt(char, encryptedArr) {
    const specialChars = /[$&+,:;=?@#|'<>.^*()%!-\s]/;
    if (char.match(specialChars)) {
      console.log('inside if statement!');
      encryptedArr.push(String.fromCharCode(char.charCodeAt(0)));
      return;
    }
    if (char === /z/) {
      encryptedArr.push('a')
      return;
    }

    let charCode = Number(char.charCodeAt(0));
    charCode += 1;

    encryptedArr.push(String.fromCharCode(charCode));
  };

  const encrypt = function encryptString(str) {
    if (str === null) return null;
    if (str === undefined) return undefined;

    const processedStr = str.trim().toLowerCase();
    const charArray = [...processedStr];
    const encryptedArr = [];
    charArray.forEach((char) =>  encryptHandler(char, encryptedArr));

    return encryptedArr.join('');
  } 

  return {
    encrypt,
  }
}();

module.exports = caesarCipher;