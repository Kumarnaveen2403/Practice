let fs = require('fs');

let rootDirectory = 'root';

let dirNames = fs.readdirSync(rootDirectory, {
    withFileTypes : true
});

for(let i = 0; i < dirNames.length; i++){
    let symbol = Object.getOwnPropertySymbols(dirNames[i]);
    // dirNames[i][symbolStr];
    // console.log(dirNames[i][symbol]);
    console.log(dirNames[i][Object.getOwnPropertySymbols(dirNames[i]).toString()]);
}

// console.log(Object.getOwnPropertySymbols(dirNames[0]));
