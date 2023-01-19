const reverseString = require('./reversestring');

// test('', () => {
//   expect().toBe();
// });

test('"123" to be "321"', () => {
  expect(reverseString('123')).toBe('321');
});

test('"Lorem ipsum" to be "muspi meroL"', () => {
  expect(reverseString('Lorem ipsum')).toBe('muspi meroL');
});

test('"456-789!" to be "!987-654"', () => {
  expect(reverseString('456-789!')).toBe('!987-654');
});

test('"__racecar__" to be "__racecar__"', () => {
  expect(reverseString('__racecar__')).toBe('__racecar__');
});

test('"  race car  " to be "rac ecar"', () => {
  expect(reverseString('  race car  ')).toBe('rac ecar');
});


test('"  race car  " to be "rac ecar"', () => {
  expect(reverseString('  race car  ')).toBe('rac ecar');
});

test('"👎👎👍👍" to be "👍👍👎👎"', () => {
  expect(reverseString('👎👎👍👍')).toBe('👍👍👎👎');
});

test('" 👎 👎 👍 👍 " to be "👍 👍 👎 👎"', () => {
  expect(reverseString(' 👎 👎 👍 👍 ')).toBe('👍 👍 👎 👎');
});

test('null variable to be null', () => {
  const n = null;
  expect(reverseString(n)).toBe(null);
  expect(reverseString(null)).toBe(null);
});

test('undefined variable to be undefined', () => {
  const n = undefined;
  expect(reverseString(n)).toBe(undefined);
  expect(reverseString(n)).toBeUndefined();
  expect(reverseString(n)).not.toBeNull();
  expect(reverseString()).toBe(undefined);
  expect(reverseString()).toBeUndefined();
  expect(reverseString()).not.toBeNull();
});
