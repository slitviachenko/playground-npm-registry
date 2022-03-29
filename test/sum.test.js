'use strict';

const sum = require('../lib/sum.cjs');

test('adds 2 + 6 to equal 8', () => {
    expect(sum(2, 6)).toBe(8);
});
