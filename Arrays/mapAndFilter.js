let products = [
    {name : "T-shirt", price : 25},
    {name : "Headphones", price : 125},
    {name : "Keyboard", price : 75},
    {name : "Moniter", price : 200}
];

let res1 = products.filter(function(v){
    if(v.price >= 100){
        return true;
    } else {
        return false;
    }
}).map(function(v){
    return v.name.toUpperCase();
});

let res2 = products.filter(v => v.price >= 100).map(v => v.name.toUpperCase());

let res3 = products.map(v => v.price >= 100 ? v.name.toUpperCase() : v.name.toLowerCase());

console.log(res1);
console.log(res2);
console.log(res3);