const totest = require('./engine');
var readline = require('readline');

test('calculate median 5 digits OK', () => {
  const result = totest.calculateMedian([1,1,1,1,1])
  expect(result).toBe(1);
});