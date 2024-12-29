import test from 'node:test';
import assert from 'node:assert';
import quickSort from '../src/quickSort.js';

test('Quick Sort Test', async t => {
    const testCases = [
        { input: [], expected: [] },
        { input: [1], expected: [1] },
        { input: [1, 2], expected: [1, 2] },
        { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
        { input: [3, 33, 3, 33], expected: [3, 3, 33, 33] },
        { input: [23, 76, 34, 55, 45], expected: [23, 34, 45, 55, 76] },
        { input: [70, 65, 89, -19, -20, 66], expected: [-20, -19, 65, 66, 70, 89] },
    ];
    testCases.forEach(({input, expected}, index) => {
        const result = quickSort([...input]);
        assert.deepStrictEqual(result, expected, `Test Case ${index + 1} failed!`);
    });
});