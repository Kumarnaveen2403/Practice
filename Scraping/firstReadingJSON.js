let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

let data = fs.readFileSync(args.dest, 'utf-8');

console.log(JSON.parse(data));