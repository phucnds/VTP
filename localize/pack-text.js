const fs = require('fs')
const xlsx = require('xlsx')

let texts = {}
let pack = ""
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
        let arr = []
        while(titleCell)
        {
            title = titleCell.v.toUpperCase()
            texts[title] = {}
            for(const col of cols)
            {
                lang = col == 'B' ? "EN" : 'MY'
                if(sheet[`${col}${rowIndex}`])
                {
                    for(let char of sheet[`${col}${rowIndex}`].v)
                    {
                        if(!arr.includes(char))
                        arr.push(char)
                    }
                }
                // content = sheet[`${col}${rowIndex}`] ? sheet[`${col}${rowIndex}`].v : ''
                // texts[title][lang] = content
            }

            rowIndex++
            titleCell = sheet[`A${rowIndex}`]
        }
        pack = arr.join("")
        console.log(pack)
        resolve()
    })
}

function SaveData()
{
	fs.writeFileSync('../assets/strings2.js',  pack)
}

let promises = []
promises.push(LoadText('Local_MyID_V2.ods'))

Promise.all(promises)
    .then(() => SaveData())