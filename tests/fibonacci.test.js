import test from 'node:test';
import assert from 'node:assert';
import generateFibonacci from '../src/fibonacci.js';

test("Fibonacci Sequence Generator", async (t) => {
    await t.test('Should return empty array for n <= 0', () => {
        assert.deepStrictEqual(generateFibonacci(0), []);
        assert.deepStrictEqual(generateFibonacci(-5), []);
    });

    await t.test('Should return [0] for n == 1', () => {
        assert.deepStrictEqual(generateFibonacci(1), [0]);
    });

    await t.test('Should return [0, 1] for n == 2', () => {
        assert.deepStrictEqual(generateFibonacci(2), [0, 1]);
    });

    await t.test('Should generate correct sequence for n == 5', () => {
        assert.deepStrictEqual(generateFibonacci(5), [0, 1, 1, 2, 3]);
    });

    await t.test('Should generate correct sequence for n == 10', () => {
        assert.deepStrictEqual(generateFibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});