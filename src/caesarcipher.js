const caesarCipher = function caesarCipherEncrypt() {

  const alterChar = function alterCharacter(char, encryptedStrArray) {
    let currCharacter = char;
    let currCharacterCode = char.charCodeAt(0);
    let alteredCharCode = currCharacterCode + 1;
    encryptedStrArray.push(String.fromCharCode(alteredCharCode));
    console.log(`current char: ${currCharacter}, alteredCharCode: ${alteredCharCode}, char code: ${currCharacterCode}`);
    console.log(`current array: ${encryptedStrArray}`);
  }

  const encrypt = function encryptString(str) {
    if (str === null) return null;
    if (str === undefined) return undefined;

    const processedStr = str.trim().toLowerCase();
    const charArray = [...processedStr];
    let encryptedStrArray = [];
    console.log(`initial array: ${encryptedStrArray}`);
    charArray.forEach((char) => {
      if (char !== /[a-z]/) {
        encryptedStrArray.push(char);
        return;
      } 
      if (char === /z/) {
        encryptedStrArray.push('a')
        return;
      }

      alterChar(char, encryptedStrArray);
    });

    return encryptedStrArray.join('');
  } 

  return {
    encrypt,
  }
}();

module.exports = caesarCipher;