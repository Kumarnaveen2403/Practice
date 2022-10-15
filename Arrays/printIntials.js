let arr = [
    "Sumeet Malik",
    "Mayank Kumar",
    "Prince Kumar",
    "Naveen Kumar"
];

let initials = arr.map(function(v, i, oarr){
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