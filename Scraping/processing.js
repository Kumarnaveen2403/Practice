let minimist = require('minimist');
let fs = require('fs');
let jsdom = require('jsdom');
const { title } = require('process');

let args = minimist(process.argv);

fs.readFile(args.file, 'utf-8', function(err, html){
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    let titles = document.querySelectorAll("div.team > div.name-detail > p.name");

    for(let i = 0; i < titles.length; i++){
        console.log(titles[i].textContent);
    }
}); 