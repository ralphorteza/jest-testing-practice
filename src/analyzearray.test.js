const analyzeArray = require('./analyzearray');

test('Validated if undefined value returns undefined', () => {
  expect(analyzeArray.analyze()).toBe(undefined);
});

test('Validate if given element is not an array', () => {
  expect(analyzeArray.analyze('[1,2,3]')).toBe('not an array!');
  expect(analyzeArray.analyze(1, 2, 3)).toBe('not an array!');
  expect(analyzeArray.analyze('Hello World!')).toBe('not an array!');
});

test('Validate if all elements in array are all numbers', () => {
  expect(analyzeArray.analyze(['1',2,3])).toBe('error!');
  expect(analyzeArray.analyze([1, 2, 3, [34,1]])).toBe('error!');
});

test('Validate if output matches the given object pt. 1', () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(analyzeArray.analyze([1,8,3,4,2,6])).toEqual(object);
})

test('Validate if output matches the given object pt. 2', () => {
  const object = {
    average: 11.7,
    min: 1,
    max: 20,
    length: 10,
  };

  expect(analyzeArray.analyze([1, 4, 7, 10, 11, 12, 16, 17, 19, 20])).toEqual(object);
})


