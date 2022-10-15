let fs = require("fs");

function primeSeive(pHandler, npHandler){
    let oarr = this;

    pHandler.calledForTheFirstTime = true;
    npHandler.calledForTheFirstTime = true;

    for(let i = 0; i < oarr.length; i++){

        let num =  oarr[i];

        let prime = true;

        for(let j = 2; j * j <= num; j++){
            if(num % j == 0){
                prime = false;
                break;
            }
        }

        if(prime == true){
            pHandler(num);
        } else {
            npHandler(num);
        }
    }
}

Array.prototype.seive = primeSeive;

let arr = [11, 18, 34, 37, 49, 53, 71, 84, 97];
arr.seive(primeHandler, nonPrimeHandler);

function primeHandler(num){
    if(primeHandler.calledForTheFirstTime == true){
        if(fs.existsSync("prime.txt")){
            fs.rmSync("prime.txt");
        }
        primeHandler.calledForTheFirstTime = false;
    }

    fs.appendFileSync("prime.txt", num + " -> ", "utf-8");

}

function nonPrimeHandler(num){
    if(nonPrimeHandler.calledForTheFirstTime == true){
        if(fs.existsSync("non-prime.txt")){
            fs.rmSync("non-prime.txt");
        }
        nonPrimeHandler.calledForTheFirstTime = false;
    }

    fs.appendFileSync("non-prime.txt", num + " -> ", "utf-8");

}