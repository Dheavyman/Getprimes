const assert = require('chai').assert;
const myFunc = require('../source/main.js');

describe('Primes', function(){

    describe('For valid inputs', function(){
        it('should return [2, 3, 5] when a number 5 is entered', function(){
            assert.deepEqual(myFunc.getPrimes(5), [2, 3, 5]);
        });
    })

    describe('For valid inputs', function(){
        it('should return [2, 3, 5] when a number 6 is entered', function(){
            assert.deepEqual(myFunc.getPrimes(6), [2, 3, 5]);
        });
    })

    describe('For valid inputs', function(){
        it('should return [2, 3, 5, 7] when a number 9 is entered', function(){
            assert.deepEqual(myFunc.getPrimes(9), [2, 3, 5, 7]);
        });
    })

    describe('For valid inputs', function(){
        it('should return [2, 3, 5, 7, 11, 13, 17] when a number 17 is entered', function(){
            assert.deepEqual(myFunc.getPrimes(17), [2, 3, 5, 7, 11, 13, 17]);
        });
    })

    describe('For valid inputs', function(){
        it('should return [2, 3, 5, 7, 11, 13, 17, 19] when a number 20 is entered', function(){
            assert.deepEqual(myFunc.getPrimes(20), [2, 3, 5, 7, 11, 13, 17, 19]);
        });
    })

    describe('For invalid inputs', function(){
        it('should return Invalid input entered when a non number "word" is entered', function(){
            assert.deepEqual(myFunc.getPrimes('word'), 'Invalid input entered');
        });
    })

    describe('For invalid inputs', function(){
        it('should return Invalid input entered when a whitespace " " is entered', function(){
            assert.deepEqual(myFunc.getPrimes(' '), 'Invalid input entered');
        });
    })

    describe('For invalid inputs', function(){
        it('should return Invalid input entered when a non number "#" is entered', function(){
            assert.deepEqual(myFunc.getPrimes('#'), 'Invalid input entered');
        });
    })

    describe('For invalid inputs', function(){
        it('should return number must be greater than 1 when a negative number "-5" is entered', function(){
            assert.deepEqual(myFunc.getPrimes(-5), 'Number must be greater than 1');
        });
    })

    describe('For invalid inputs', function(){
        it('should return number must be greater than 1 when number 1 is entered', function(){
            assert.deepEqual(myFunc.getPrimes(1), 'Number must be greater than 1');
        });
    })
})