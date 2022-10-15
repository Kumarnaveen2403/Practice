let minimist = require('minimist');
let fs = require('fs');
let path = require('path');
let pdf = require('pdf-lib');

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, 'utf-8');

let teams = JSON.parse(teamsJSON);
fs.mkdirSync('worldCup');

for(let i = 0; i < teams.length; i++){
    let folderName = teams[i].name;

    let folder = path.join('worldCup', folderName)
    fs.mkdirSync(folder);

    for(let j = 0; j < teams[i].matches.length; j++){
        createPdf(teams[i].name, teams[i].matches[j].vs, teams[i].matches[j].result);
    }

}

function createPdf(teamName, vs, result){
    let templateBytes = fs.readFileSync('template.pdf');

    let pdfDocument = pdf.PDFDocument;
    let pdfDocPromise = pdfDocument.load(templateBytes);

    pdfDocPromise.then(function(pdfDoc){
        let page = pdfDoc.getPage(0);
        page.drawText(teamName, {
            x: 320,
            y: 655,
            size: 20
        });
        page.drawText(vs, {
            x: 320,
            y: 630,
            size: 20
        });
        page.drawText(teamName + " " + result, {
            x: 320,
            y: 605,
            size: 20
        });
        let pdfBytes = pdfDoc.save();

        pdfBytes.then(function(modifiedBytes){
            let fileName = path.join('worldCup', teamName, vs + '.pdf');
            fs.writeFileSync(fileName, modifiedBytes);
        });
    });
}

//would the popups on the site create problem while reading the html
//ublock origin adblocker is good if you want to use it