const capitalize = require('./capitalize');

test('"cat" to "Cat"', () => {
  expect(capitalize('cat')).toBe('Cat');
});

test('"Cat" to "Cat"', () => {
  expect(capitalize('Cat')).toBe('Cat');
});

test('null entry to null', () => {
  const n = null;
  expect(capitalize(n)).toBeNull();
});

test('undefined entry to undefined', () => {
  expect(capitalize()).toBeUndefined();
});

test('"CAT" to "CAT"', () => {
  expect(capitalize('CAT')).toBe('CAT');
});

test('"pharetra magna ac placerat vestibulum" to "Pharetra magna ac placerat vestibulum"', () => {
  expect(capitalize('pharetra magna ac placerat vestibulum')).toBe('Pharetra magna ac placerat vestibulum');
});

test('" " to be ""', () => {
  expect(capitalize(' ')).toBe('');
});


test('"12345" to be "12345"', () => {
  expect(capitalize('12345')).toBe('12345');
});


test('"!hello World!" to be "!hello World!"', () => {
  expect(capitalize('!hello World!')).toBe('!hello World!');
});

test('" hello World!" to be "Hello World!"', () => {
  expect(capitalize(' hello World!')).toBe('Hello World!');
});