const extractTrace = require('./app');

test('simple test for app', () => {
  expect(extractTrace("Test")).toBe(false);
});