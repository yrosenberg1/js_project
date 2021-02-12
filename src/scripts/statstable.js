import * as d3 from 'd3';
import { timeDay } from 'd3';

const statsTable = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
    
    return data[0]


}).then( statsTable => {
    const table = document.createElement("table")
    table.setAttribute("id", "stats-table");
    document.body.appendChild(table);

    const tableHeaderRow = document.createElement("tr")
tableHeaderRow.setAttribute("class", "table-header-row" )
const headerNames = ["Age","Team","League","Raw Games","PA","AB","Raw Runs Scored","Raw Hits","2B","3B","Raw HR","Raw RBI","SB","CS","BB","SO","Raw BA","Raw OBP","Raw SLG","Raw OPS","Raw OPS+","TB","GDP","HBP","SH","SF","IBB","Pos Summary"]
 const tableHeader = Object.keys(statsTable)
for (const key of tableHeader){
    if (headerNames.includes(key)){
        
    const header = document.createElement('th')
    if (key.includes("Raw")){
     key = key.replace("Raw ", "")
    }
        header.setAttribute("class","table-header-items" )
    header.innerText = key
    tableHeaderRow.append(header)
    }}

table.appendChild(tableHeaderRow)

    const tr = document.createElement('tr')
    for (const key of tableHeader){
        const cell = document.createElement('td')
        if (headerNames.includes(key)){
        const cellData = statsTable[key]
        cell.innerText = cellData
        tr.appendChild(cell)
        
    }}
    table.appendChild(tr)
     


const tableBody = document.createElement('tbody')
tableBody.setAttribute("class", "table-body")
table.append(tableBody)
})
// const table=createTable(statsTable) 
debugger
export default statsTable;