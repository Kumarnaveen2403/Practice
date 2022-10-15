let minimist = require('minimist');
let fs = require('fs');
let excel = require('excel4node');
const { log } = require('console');

let args = minimist(process.argv);

let json = fs.readFileSync(args.source, 'utf-8');

let teams = JSON.parse(json);

let wb = new excel.Workbook();

for(let i = 0; i < teams.length; i++){
    let ws = wb.addWorksheet(teams[i].name);

    ws.cell(1,1).string('Rank');
    ws.cell(1,2).number(teams[i].rank);

    ws.cell(2,1).string('Opponent');
    ws.cell(2,2).string('Result');
    
    for(let j = 0; j < teams[i].matches.length; j++){
        ws.cell(3 + j, 1).string(teams[i].matches[j].vs);
        ws.cell(3 + j, 2).string(teams[i].matches[j].result);
    }
    

}

wb.write('teams.csv');