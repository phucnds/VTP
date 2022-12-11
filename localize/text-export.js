const fs = require('fs')
const xlsx = require('xlsx')

let texts = {}

function LoadText(fileName)
{
    return new Promise((resolve, reject) => {
        const workbook = xlsx.readFile(fileName)
        const sheet = workbook.Sheets.contents

        let rowIndex = 2
        let cols = ['B', 'C']
        let titleCell = sheet[`A${rowIndex}`]
        let title
        let lang
        let content
        while(titleCell)
        {
            title = titleCell.v.toUpperCase()
            texts[title] = {}
            for(const col of cols)
            {
                lang = col == 'B' ? "EN" : 'VI'
                content = sheet[`${col}${rowIndex}`] ? sheet[`${col}${rowIndex}`].v : ''
                texts[title][lang] = content
            }

            rowIndex++
            titleCell = sheet[`A${rowIndex}`]
        }

        resolve()
    })
}

function SaveData()
{
	fs.writeFileSync('../assets/strings.js', 'module.exports = ' + JSON.stringify(texts))
}

let promises = []
// const url = 'Local_MyViettel_V2.ods'
// promises.push(LoadText('Local_MyID_V2.ods'))
// promises.push(LoadText(url))
promises.push(LoadText('Local_MyViettel_V2.ods'));

Promise.all(promises)
    .then(() => SaveData())