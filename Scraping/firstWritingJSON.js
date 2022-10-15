let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

let json = [
    {
        name : "India"
    }
];

fs.writeFileSync(args.dest, JSON.stringify(json), 'utf-8');