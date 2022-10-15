let axios = require('axios');
let minimist = require('minimist');
let fs = require('fs')

let args = minimist(process.argv);

let  downloadPromise = axios.get(args.url);

downloadPromise.then(function(response){
    fs.writeFileSync(args.dest, response.data, 'utf-8');
}).catch(function(err){
    console.log(err);
});