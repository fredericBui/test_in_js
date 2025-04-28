let myScript = require('../1-manual_test_and_unit_test/script.js');

test('adds 1 + 2 to equal 3', () => {
    expect(myScript.add(1, 2)).toBe(3);
});