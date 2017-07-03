const assert = require('chai').assert;
const myfunc = require('../source/main.js');

describe("Primes", function(){
    describe('Evaluate invalid inputs', function(){
        it('Should return invalid input as Primes for "word"', function(){
            assert.equal(myfunc.getPrimes('word'), 'invalid input')
        });
    })

    describe('Evaluate invalid inputs', function(){
        it('Should return invalid input as Primes for ""', function(){
            assert.equal(myfunc.getPrimes(''), 'invalid input')
        });
    })

    describe('Evaluate invalid inputs', function(){
        it('Should return invalid input as Primes for -10', function(){
            assert.equal(myfunc.getPrimes(-10), 'invalid input')
        });
    })

    describe('Evaluate valid inputs', function(){
        it('Should return [2, 3, 5] as Primes for 5', function(){
            assert.deepEqual(myfunc.getPrimes(5), [2, 3, 5])
        });
    })

    describe('Evaluate valid inputs', function(){
        it('Should return [2, 3, 5, 7] as Primes for 10', function(){
            assert.deepEqual(myfunc.getPrimes(10), [2, 3, 5, 7])
        });
    })

    describe('Evaluate valid inputs', function(){
        it('Should return [2, 3, 5, 7, 11, 13, 17, 19] as Primes for 20', function(){
            assert.deepEqual(myfunc.getPrimes(20), [2, 3, 5, 7, 11, 13, 17, 19])
        });
    })
})