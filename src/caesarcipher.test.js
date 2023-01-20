const caesarCipher = require('./caesarcipher');
// const cipher = require('./caesarcipher');

test('null  to be null', () => {
  const str = null;
  expect(caesarCipher.encrypt(null)).toBeNull();
  expect(caesarCipher.encrypt(str)).toBeNull();
});

test('undefined to be undefined', () => {
  const str = undefined;
  expect(caesarCipher.encrypt()).toBeUndefined();
  expect(caesarCipher.encrypt(str)).toBeUndefined();
});

test('" " to be ""', () => {
  expect(caesarCipher.encrypt(" ")).toBe("");
});


test('"A" to be "b"', () => {
  expect(caesarCipher.encrypt("A")).toBe("b");
});

test('"abc" to be "bcd"', () => {
  expect(caesarCipher.encrypt("abc")).toBe("bcd");
});

test('"attack at dawn" to be "fyyfhp fy ifbs"', () => {
  expect(caesarCipher.encrypt("attack at dawn")).toBe("buubdl bu ebxo");
});

test('"Attack @ dawn." to be "fyyfhp @ ifbs."', () => {
  expect(caesarCipher.encrypt("Attack @ dawn.")).toBe("buubdl @ ebxo.");
});