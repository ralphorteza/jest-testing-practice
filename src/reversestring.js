
function reverseString(str) {
  if (str === null) return null;
  if (str === undefined) return undefined;
  
  str = str.trim();
  const charArray = [...str];
  const reversedString = charArray.reverse().join('');
  // console.log(reversedString);
  return reversedString;
}

module.exports = reverseString;