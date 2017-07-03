'using strict';

module.exports = {
    getPrimes: (n) => {

        if ((typeof(value) !== 'number') || (n <= 1)){
            return 'invalid input';
        }
        else {
            let listOfPrimes = [];
            for (var i = 2; i <= n; i++){
                let notPrime = false;
                for (var j = 2; j < i; j++){
                    if (i % j == 0) {
                        notPrime = true;
                    }
                }
                if(notPrime == false){
                    listOfPrimes.push(i);
                }
            }
            return listOfPrimes;
        }
    }
}