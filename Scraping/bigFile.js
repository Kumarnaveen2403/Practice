let fs = require('fs');
let minimist = require('minimist');

args = minimist(process.argv);

let arr = [];
for(let i = 1; i <= 50000000; i++){
    arr.push(i);
}

let str = arr.join("\n");

fs.writeFileSync(args.dest, str);
fs.appendFileSync(args.dest, str);
fs.appendFileSync(args.dest, str);
fs.appendFileSync(args.dest, str);
