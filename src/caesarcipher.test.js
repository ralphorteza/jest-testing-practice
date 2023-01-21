const caesarCipher = require('./caesarcipher');
// const cipher = require('./caesarcipher');

test('null  to be null', () => {
  const str = null;
  expect(caesarCipher.encrypt(null, 1)).toBeNull();
  expect(caesarCipher.encrypt(str, 1)).toBeNull();
  expect(caesarCipher.encrypt("abc", str)).toBeNull();
  expect(caesarCipher.encrypt("abc", null)).toBeNull();
});

test('undefined to be undefined', () => {
  const str = undefined;
  expect(caesarCipher.encrypt()).toBeUndefined();
  expect(caesarCipher.encrypt(str)).toBeUndefined();
});

test('" " shifted by 1 to be ""', () => {
  expect(caesarCipher.encrypt(" ", 1)).toBe("");
});


test('"A" shifted by 1 to be "b"', () => {
  expect(caesarCipher.encrypt("A", 1)).toBe("B");
});

test('"abc" shifted by 1 to be "bcd"', () => {
  expect(caesarCipher.encrypt("abc", 1)).toBe("bcd");
});

test('"attack at dawn" shifted by 1 to be "buubdl bu ebwo"', () => {
  expect(caesarCipher.encrypt("attack at dawn", 1)).toBe("buubdl bu ebxo");
});

test('"Attack @ daWn." shifted by 1 to be "Buubdl @ ebXo."', () => {
  expect(caesarCipher.encrypt("Attack @ daWn.", 1)).toBe("Buubdl @ ebXo.");
});

test('"qrs tuv wxyz" shifted by 1 to be "vwx yza bcde"', () => {
  expect(caesarCipher.encrypt("qrs tuv wxyz", 5)).toBe("vwx yza bcde");
});

test(`"Tincidunt! I'd aliquet, risus feugiat?" to be Qfkzfarkq! F'a xifnrbq, ofprp cbrdfxq?`, () => {
  expect(caesarCipher.encrypt("Tincidunt! I'd aliquet, risus feugiat?", 23))
  .toBe(`Qfkzfarkq! F'a xifnrbq, ofprp cbrdfxq?`);
});

test(`"Tincidunt! I'd aliquet, risus feugiat?" to be "Vkpekfwpv! K'f cnkswgv, tkuwu hgwikcv?"`, () => {
  expect(caesarCipher.encrypt("Tincidunt! I'd aliquet, risus feugiat?", 28))
  .toBe(`Vkpekfwpv! K'f cnkswgv, tkuwu hgwikcv?`);
});