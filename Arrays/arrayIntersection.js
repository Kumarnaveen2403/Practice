let arr1 = [
    [10, 20, 30, 40, 50],
    [10, 20, 30, 40, 50],
    [10, 20]
];

let res = arr1.reduce(function(prev, curr, ci, oarr){
    return curr.filter(val => prev.includes(val));
});

console.log(res);