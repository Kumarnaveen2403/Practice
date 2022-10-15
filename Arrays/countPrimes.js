let arr = [51, 23, 37, 44, 73, 82, 97, 45];

function isPrime(num) {

    if (num == 1) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

let primes = arr.reduce(function(pv, cv, i, oarr){
    if(isPrime(cv)){
        return pv + 1;
    } else {
        return pv;
    }

}, 0);

console.log(primes);