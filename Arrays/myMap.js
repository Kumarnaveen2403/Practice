Array.prototype.myMap = function(callback){
    let res = [];

    for(let i = 0; i < this.length; i++){
        res.push(callback(this[i], i, this));
    }

    return res;
};

let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

let res = arr.myMap(function(v, i, oarr){
    let obj = v;
    let gender = obj.gender;
    let age = obj.age;

    if(gender == 'M'){
        return false;
    } else if(gender == 'F'){
        if(age >= 20 && age <= 30){
            return true;
        } else {
            return false;
        }
    }
});

let names = [
    "Sumeet Malik",
    "Mayank Kumar",
    "Prince Kumar",
    "Naveen Kumar"
];

let initials = names.myMap(function(v, i, oarr){
    let name = v;
    let nameArr = name.split(' ');
    let fname = nameArr[0];
    let lname = nameArr[1];

    let firstInitial = fname[0];
    let lastInitial = lname[0];

    let ans = firstInitial + "." + lastInitial + ".";
    return ans;
});

console.log(initials);
