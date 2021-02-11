import * as d3 from 'd3';

const statsTable = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
    console.log(data[0])
    return data[0]


})

console.log(`statsTable:${statsTable}`)
// createTable(data)
     
const createTable = statsTable =>{
    const table = document.createElement("TABLE")
    table.setAttribute("id", "stats-table");
    document.body.appendChild(table);
}
debugger

export default statsTable;