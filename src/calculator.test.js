const calculator = require('./calculator');

// test('', () => {
//   expect(calculator()).toBe();
// });

// Tests for calculator addition.
test('add 1 and 2 to be 3', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('add 1, 2, 3 to be 6', () => {
  expect(calculator.add(1,2,3)).toBe(6);
});

test('add "1", 2, 3 to be 5', () => {
  expect(calculator.add("1", 2, 3)).toBe(5);
});

test('add 1, "2", 3 to be 4', () => {
  expect(calculator.add(1,'2',3)).toBe(4);
});

test('add 1, "2", 3 to be 4', () => {
  expect(calculator.add(1,'2',3)).toBe(4);
});

test('add "", " ", "" to be 0', () => {
  expect(calculator.add("", " ", "")).toBe(null); // hello
});

test('add a = null, b = null to be null', () => {
  const a = null;
  const b = null;
  expect(calculator.add(a, b)).toBe(null);
});

test('add a = 1, b = 2 to be 3', () => {
  const a = 1;
  const b = 2;
  expect(calculator.add(a, b)).toBe(3);
});


test('add a = " ", b = 2, c = 3, to be 5', () => {
  const a = " ";
  const b = 2;
  const c = 3;
  expect(calculator.add(a, b, c)).toBe(5);
});


test('add "a", "!", 4, "seven", 3, "3" to be 7', () => {
  expect(calculator.add("a", "!", 4, "seven", 3, "3")).toBe(7);
});

test('add [1,2,3], 4, 5, to be 9', () => {
  expect(calculator.add([1,2,3], 4, 5)).toBe(9);
});

// Test for calculator subtraction
test('subtract 5, 2 to be 3', () => {
  expect(calculator.sub(5, 2)).toBe(3);
});

test('subtract 0, 4 to be -4', () => {
  expect(calculator.sub(0, 4)).toBe(-4);
});

test('subtract -2 to be -3', () => {
  expect(calculator.sub(-1, 2)).toBe(-3);
});

test('subtract 1 to be 1', () => {
  expect(calculator.sub(1)).toBe(1);
});

test('subtract "2", 1 to be 1', () => {
  expect(calculator.sub("2", 1)).toBe(1);
});

test('subtract "2","1" to be null', () => {
  expect(calculator.sub("2", "1")).toBe(null);
});


test('subtract 4, 2, 1 to be 1' , () => {
  expect(calculator.sub(4, 2, 1)).toBe(1);
});

test('subtract -4, -2, -1 to be -1' , () => {
  expect(calculator.sub(-4, -2, -1)).toBe(-1);
});


// Tests for multiply.
// test('multiply _ to be _', () => {
//   expect(calculator.mul()).toBe();
// });
test('multiply 1, 1 to be 1', () => {
  expect(calculator.mul(1, 1)).toBe(1);
});

test('multiply 1, 5 to be 5', () => {
  expect(calculator.mul(1, 5)).toBe(5);
});

test('multiply -1, 5 to be -5', () => {
  expect(calculator.mul(-1, 5)).toBe(-5);
});

test('multiply 1, -5 to be -5', () => {
  expect(calculator.mul(1, -5)).toBe(-5);
});

test('multiply -1, -5 to be 5', () => {
  expect(calculator.mul(-1, -5)).toBe(5);
});

test('multiply 0, 5 to be 0', () => {
  expect(calculator.mul(0, 5)).toBe(0);
});

test('multiply 5, 0 to be 0', () => {
  expect(calculator.mul(5, 0)).toBe(0);
});

test('multiply 3, 4, 5 to be 60', () => {
  expect(calculator.mul(3, 4, 5)).toBe(60);
});

test('multiply 3, -4, 5 to be -60', () => {
  expect(calculator.mul(3, -4, 5)).toBe(-60);
});

test('multiply 3, -4, -5 to be 60', () => {
  expect(calculator.mul(3, -4, -5)).toBe(60);
});

test('multiply 3, -4, 0 to be 0', () => {
  expect(calculator.mul(3, -4, 0)).toBe(0);
});

test('multiply 3, "4", 5 to be 15', () => {
  expect(calculator.mul(3, "4", 5)).toBe(15);
});

test('multiply [1, "a", 3] 4, 5 to be 20', () => {
  expect(calculator.mul([1, "a", 3], 4, 5)).toBe(20);
});


// Tests for division.
// test('divide _ to be _', () => {
//   expect(calculator.div()).toBe();
// });

test('divide _ to be _', () => {
  expect(calculator.div()).toBe();
});

test('divide _ to be _', () => {
  expect(calculator.div()).toBe();
});

test('divide _ to be _', () => {
  expect(calculator.div()).toBe();
});

test('divide _ to be _', () => {
  expect(calculator.div()).toBe();
});

test('divide _ to be _', () => {
  expect(calculator.div()).toBe();
});