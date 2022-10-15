Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        let res = callback(this[i], i, this);
        if(res == false){
            return false;
        }
    }

    return true;
};

let arr = [
    {name : "A", age : 14, gender : "M"},
    {name : "B", age : 34, gender : "M"},
    {name : "C", age : 34, gender : "F"},
    {name : "D", age : 24, gender : "F"},
    {name : "E", age : 44, gender : "M"},
    {name : "F", age : 28, gender : "F"},
    {name : "G", age : 36, gender : "M"},
    {name : "H", age : 27, gender : "F"},
];

let isThereAnyValidCandidate = arr.filter(v => v.gender == "F").myEvery(function(v, i, oarr){
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    } else {
        return false;
    }
});

console.log(isThereAnyValidCandidate);