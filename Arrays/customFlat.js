Array.prototype.myFlat = function(depth){
    let arr = this;
    let res = [];

    for(let i = 0; i < arr.length; i++){
        customFlat(arr[i], depth - 1, res);
    }

    return res;
}

function customFlat(el, depth, res){
    if(Array.isArray(el)){
        if(depth > 0){
            for(let i = 0; i < el.length; i++){
                customFlat(el[i], depth - 1, res);
            }
        } else {
            res.push(el);
        }
    } else {
        res.push(el)
    }
}

let arr1 = [10, 20, [50, 60, [90, 100]]];

let res1 = arr1.myFlat(2);

console.log(res1);

// flat(0) = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110]
// flat(1) = [10, 20, 30, [50, [70, 80, 90], 60], 40, 100, 120, [150, [170, 180, 190], 160], 140, 200, 110]
// flat(2) = [10, 20, 30, 50, [70, 80, 90], 60, 40, 100, 120, 150, [170, 180, 190], 160, 140, 200, 110]
// flat(3) = [10, 20, 30, 50, 70, 80, 90, 60, 40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110]
