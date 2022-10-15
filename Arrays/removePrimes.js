let arr = [1, 2, 5, 3, 7, 6, 10, 20, 11];

displayArray(arr);

for(let i = arr.length - 1; i >= 0; i--){
    if(isPrime(arr[i]) == true){
        arr.splice(i, 1);
    }
}

displayArray(arr);

function isPrime(num){
    for(let i = 2; i * i <= num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}