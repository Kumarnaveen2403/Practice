Array.prototype.myFilter = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        let r = callback(this[i], i, this);
        
        if(r == true){
            res.push(this[i]);
        }
    }

    return res;
}

let arr = [1,2,3,4,5,6,7,8,9];

let odds = arr.myFilter(function(v, i, oarr){
    if(v % 2 == 0){ 
        return false;
    } else {
        return true;
    }
});

console.log(odds);