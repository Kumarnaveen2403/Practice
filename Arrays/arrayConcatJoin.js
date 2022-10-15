let str = "My name is Sumeet Malik. I am a software developer. I believe in learning by doing. I need patience and courage";

let ans = str.split(".")
.map(function(val, idx, oarr){
    let wordsArr = val.split(" ");
    wordsArr = wordsArr.filter(val => val != '');
    let rev = wordsArr.reverse();
    return rev;
})
.filter(val => val != '')
.reduce(function(prev, curr, ci, oarr){
    let joinedString = curr.join(" ");
    return prev + joinedString + ". ";
}, "")

console.log(ans);