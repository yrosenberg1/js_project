import * as d3 from 'd3';
// const tableContainer = d3.select(".table-container")
const tableContainer = document.querySelector(".table-container")
// const statsTable = playerObject => {
//  
//     const table = tableContainer.append('table')
//     const tableHeader = Object.keys(playerObject)
//    
//     const header = table.append('thead').append('tr')

//     header
//         .selectAll('th')
//         .data(tableHeader)
//         .enter()
//         .append('th')
//         .attr("class", "headers")
//         .text( d => d)
//       

//     table.selectAll('tr')
//     .data(playerObject)
//     .enter()
//     .append("tr")
//     .attr("class", "rows")
    
// }
let table = document.createElement("table")

export const statsTable = (playerObject) => {
    
    
    if (table.rows.length){
        
        const rows = table.rows.length - 1
        for (let i = rows; i >= 0; i--) {
            table.deleteRow(i)
         }  
    }
    table.setAttribute("id", "stats-table");
    tableContainer.appendChild(table);

    const tableHeaderRow = document.createElement("tr")
tableHeaderRow.setAttribute("class", "table-header-row" )
const headerNames = ["Age","Team","League","Raw Games","PA","AB","Raw Runs Scored","Raw Hits","2B","3B","Raw HR","Raw RBI","SB","CS","BB","SO","Raw BA","Raw OBP","Raw SLG","Raw OPS","Raw OPS+","TB","GDP","HBP","SH","SF","IBB","Pos Summary"]
 
const tableHeader = Object.keys(playerObject)
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
            let cellData = ""
            if (playerObject[key] === null){
                cellData = 'N/A'
            } else
         cellData = playerObject[key]
        
        cell.innerText = cellData
        tr.appendChild(cell)
        
    }}
    table.appendChild(tr)
     


const tableBody = document.createElement('tbody')
tableBody.setAttribute("class", "table-body")

table.append(tableBody)



   }

export default statsTable;