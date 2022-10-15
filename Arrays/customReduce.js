Array.prototype.myReduce = function(callback, pv){
    if(pv == undefined){
        let res = this[0];
        for(let i = 1; i < this.length; i++){
            res = callback(res, this[i], i, this);
        }

        return res;
    } else {
        let res = pv;
        for(let i = 0; i < this.length; i++){
            res = callback(res, this[i], i, this);
        }

        return res;
    }
    
};

let arr = [10, 20, 30, 40, 50];

let sum1 = arr.myReduce(function(pv, cv, ci, oarr){
    return pv * cv;
});

console.log(sum1);