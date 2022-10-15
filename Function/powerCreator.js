function powerCreator(obj){
    if(typeof obj.exp !== 'number'){
        console.log('exp must be a number');
        return null;
    }

    let fun = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }

    return fun;
}

let obj = {
    exp : 2
}

let squarer = powerCreator(obj);
let val1 = squarer(8);
console.log(val1);

obj.exp = 3;

let cuber = powerCreator(obj);
let val2 = cuber(11);
console.log(val2);