function f(x){
    return x * x;
}

function g(x){
    return x + 10;
}

function h(x){
    return x * 2;
}

let farr = [f, g, h];

let x = 10;

let func = farr.reduce(function(pv, cv, i, oarr){
    return pv(cv);
});

let ans = func(x);

// f(g(h(x)))

console.log(ans);