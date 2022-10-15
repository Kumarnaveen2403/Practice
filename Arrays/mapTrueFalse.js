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

let res = arr.map(function(v, i, oarr){
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

console.log(res);