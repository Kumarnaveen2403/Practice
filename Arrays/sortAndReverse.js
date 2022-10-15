let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let arr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];

let rev1 = sarr.sort();
let rev2 = arr.sort((a, b) => a - b);

console.log(sarr);
console.log(arr);

// sort and reverse