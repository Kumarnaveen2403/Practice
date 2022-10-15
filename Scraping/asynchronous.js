let minimist = require('minimist');
let fs = require('fs');

let clargs = process.argv;
let  args = minimist(clargs);

function IsPrime(x){
    let flag = true
    for(let i = 2; i < x; i++){
        if(x % i == 0){
            flag = false;
            break;
        }
    }

    return flag;
}

//task 1
let t1 = Date.now();
console.log("starting task 1 at "+ t1 % 10000);
fs.readFile(args.source, function(){
    let t2 = Date.now();
    console.log("finished task 1 at "+ t2 % 10000);
    console.log("total time for task 1 " + (t2 - t1));
    console.log("total time " + (t4 - t1));
});

//task 2
let t3 = Date.now();
console.log("starting task 2 at " + t3 % 10000);

let arr = [];
for(let i = 2; i < 50000; i++){
    if(IsPrime(i) == true){
        arr.push(i);
    }
}

let t4 = Date.now(); 
console.log("finished task 2 at " + t4 % 10000);
console.log("total time for task 2 " + (t4 - t3));