let arr = [5, 83, 24, 67, 71, 12, 24, 7];

let res = arr.filter(v => v*v <= 1000).map(v => v*v*v);

let res2 = arr.filter(v => v * v * v < 10000).map(v => v * v * v);

console.log(res);
console.log(res2);