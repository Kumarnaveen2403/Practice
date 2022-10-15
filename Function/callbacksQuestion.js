let arr = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "My name is Sumeet Malik. I am a teacher.",
    "",
    "",
    "",
    "",
    "",
    ""
];

function convertString(smallString, largeString) {
    let oarr = this;

    for (let i = 0; i < oarr.length; i++) {
        if (oarr[i].length < 50 && oarr[i].length > 0) {
            smallString(oarr[i]);
        } else if (oarr[i].length > 50) {
            largeString(oarr[i]);
        }
    }

}

Array.prototype.convertString = convertString;

arr.convertString(smallString, largeString);

function smallString(str) {
    let sentences = str.split(".");
    sentences = sentences.map(val => val.trim()).filter(val => val.length > 0);
    sentences = sentences.map(val => val.split(" "));
    sentences = sentences.map(val => val.reverse());
    sentences = sentences.reduce((prev, curr) => prev + curr.join(" ") + ". ", "");
    console.log(sentences);

}

function largeString(str) {
    let sentences = str.split(".");
    sentences = sentences.map(val => val.trim()).filter(val => val.length > 0);
    sentences = sentences.map(val => val.split(" "));
    sentences.reverse();
    sentences = sentences.reduce((prev, curr) => prev + curr.join(" ") + ". ", "");
    console.log(sentences);

}
// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50 in length) and the other for long strings

// short string callback should do the following
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should to the following
// I teach programming. I am a teacher. My name is Sumeet Malik.