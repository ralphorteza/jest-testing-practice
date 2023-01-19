function capitalize(str) {
  if (str === null) return null;
  if (str === undefined) return undefined;
  str = str.trim();
  const firstCharacter = str.substring(0, 1).toUpperCase();
  const restOfString = str.substring(1);

  return firstCharacter.concat(restOfString);
}

module.exports = capitalize;