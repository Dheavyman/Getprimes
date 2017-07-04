'use strict';

module.exports = {
    getPrimes: (n) => {
        if (typeof(n) != 'number') {
            return 'Invalid input entered';
        }
        else if ( n <= 1) {
            return 'Number must be greater than 1';
        }
        else {
            let sieve = [], i, j, listOfPrimes = [];
            for (i = 2; i <= n; ++i) {
                if (!sieve[i]) {
                    listOfPrimes.push(i);
                    for (j = i << 1; j <= n; j += i) {
                        sieve[j] = true;
                    }
                }
            }
            return listOfPrimes;
        }
    }
}