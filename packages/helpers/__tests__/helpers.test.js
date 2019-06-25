const helpers = require('..');

describe('@hardfist/helpers', () => {
  test('helpers', () => {
    expect(helpers(1, 2)).toBe(3);
  });
});
