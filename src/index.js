import { csv, select, scaleLinear, max, scaleBand, axisLeft, axisBottom, schemeGnBu  } from "d3";
 import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/search.scss";
import "./styles/chart.scss";
import * as d3 from 'd3';
import playerData from "./scripts/search";

import statsTable from './scripts/statstable';
let selecter = 1
let player = {};
const button = select('#percentage-ranking-button')

const updateSelecter = () => {
        
    if (selecter === 0){
        selecter = 1
        button.text("By Ranking")
        
    } else {
        selecter = 0
        button.text("By Percentage")
    }
    createPlayerArrays(player)
}  
  

    export const createPlayerArrays = (playerObject) => {
      
        if (selecter === 1){
            
        createPlayerArrayPercentage(playerObject);
        } else {
            debugger
        createPlayerArraysRanking(playerObject)
        }
        player = playerObject
        button.text('by Ranking')
        debugger
    }
    
  

    button
        .on('click', updateSelecter)
        


    const width = 1000
    const height = 1000
    const margin = {left: 100, top: 30, right: 100, bottom: 50}
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
const svg = select('.chart-container')
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append('g')
        .attr(`transform`, `translate(${margin.left}, ${margin.top})`)
    
        // button = d3.select("#ranking-button")
        // .on('click', createPlayerArraysRanking(playerObject))
      
        //  button = d3.select("#percentage-button")
        //  .on('click', createPlayerArrayPercentage(playerObject))
      // sets the bar x dimension
    const xScale = scaleBand()
     
        .range([0, chartWidth])
        .padding(0.1);
    // const xAxis = axisBottom(xScale);
    const xAxis = svg.append('g')
        .attr(`transform`, `translate(0, ${chartHeight})`)
        .attr('class', "xAxis")
        // sets the bar's y-dim

   const yScale = scaleLinear()
        // .domain([0, 100])
        .domain([700, 0])
        .range([chartHeight, 0])

       // orients the x and y axis

    // const yAxis = axisLeft(yScale)
        const yAxis = svg.append('g')
            .attr("class", "yAxis")
           

    // const g = svg.append('g')
    //      .attr(`transform`, `translate(${margin.left}, ${margin.top})` );

    // g.append('g').call(yAxis)
   
    //     .attr(`transform`, `translate(0, ${chartHeight})` )
       
 //accepts array to set the bar graph
const update = data => {
    
    // fn that sorts the key and values from objects into x and y
    console.log("data")
    console.log(data)

        const xKeys = d => d.key
        const yValues = d => d.value
        const setting = data[0].setting
        console.log("setting")
        console.log(setting)
    if (setting === "ranking"){
        yScale.domain([700, 0])
    } else {
    yScale.domain([0, 100])
    }
        xScale.domain(data.map(xKeys))
       xAxis.transition().duration(1000).call(axisBottom(xScale))

        yAxis.transition().duration(1000).call(axisLeft(yScale))
    
    const u = svg.selectAll('rect').data(data)
    //  u
    //  .attr(`transform`, `translate(${margin.left},${margin.top})`)
     u
      .enter().append('rect')
      .merge(u).transition().duration(1000)    
      .attr('x', d => xScale(xKeys(d)))
      .attr('y', d => yScale(yValues(d)))
      .attr('width', xScale.bandwidth()) 
    // .attr('height', yScale(xKeys)) 
     .attr('height', d => chartHeight - yScale(yValues(d)))
    
    u.exit().remove()
}
    // g.exit().remove();
        
    // g.selectAll('rect').data(data)



//  function update(variable) {
//     d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType, data => {
//          const playerArray = [];
   
//     const xKeys = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
//     for (const key in playerObject){
//         if (xKeys.includes(key)){
//         playerArray.push({
//             key:key,
//             value: playerObject[key] * 100
//         })
//     }}
//     }
//     )}
// d3.csv("/src/dataset/2020statsBaseballSavant.csv",  d3.autoType).then(data => {
//     // data.forEach(row => {
//     //     row.year = +row.year,
//     //     row.xwoba = +row.xwoba
        
//     // })
    
//     console.log(data)
//     render(data);
// })

// d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
    // data.forEach(row => {
    //   row.year


//   export const createChart = playerObject => {
//     console.log("createChart's playerObject")
//     console.log(playerObject)
    
//       const playerArrayPercentage = []
//       const playerArrayRanking = []
//     //   console.log(playerArray)
//       const xKeysPercentage = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
//       const xKeysRanking = ["Games Ranking","Runs Ranking", "Hits Ranking","HR Ranking", "RBI Ranking", "BA Ranking", "OBP Ranking", "SLG Ranking", "OPS Ranking", "OPS+ Ranking"]
//       for (const key in playerObject){
//           if (xKeysPercentage.includes(key)){
//           playerArrayPercentage.push({
//               key:key,
//               value: playerObject[key] * 100
//           })
//       }}
//       for (const key in playerObject){
//         if (xKeysRanking.includes(key)){
//         playerArrayRanking.push({
//             key:key,
//             value: playerObject[key] 
//         })
//     }}
   
//    console.log("playerArrayPercentage")
//    console.log(playerArrayPercentage)
//     console.log("playerArrayRanking")
//     console.log(playerArrayRanking)
    
//     debugger
//     update(playerArrayPercentage);
// }



   

 export const createPlayerArrayPercentage = playerObject => {
     debugger
    const xKeysPercentage = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
    const playerArrayPercentage = []
    for (const key in playerObject){
        if (xKeysPercentage.includes(key)){
        playerArrayPercentage.push({
            key:key,
            value: playerObject[key] * 100,
            setting: "percentage" 
        })
    }}
    update(playerArrayPercentage)
    return playerArrayPercentage
 }
 
 export const createPlayerArraysRanking = (playerObject) => {
     debugger
    const xKeysRanking = ["Games Ranking","Runs Ranking", "Hits Ranking","HR Ranking", "RBI Ranking", "BA Ranking", "OBP Ranking", "SLG Ranking", "OPS Ranking", "OPS+ Ranking"]
    const playerArrayRanking = []

    for (const key in playerObject){
        
        if (xKeysRanking.includes(key)){
        playerArrayRanking.push({
            key:key,
            value: playerObject[key],
            setting: "ranking" 
        })
       
    }}
    playerArrayRanking.forEach( playerAttribute =>{
         if (playerAttribute.key.includes("Ranking")){
                playerAttribute.key = playerAttribute.key.replace(" Ranking", "")
         }
    })
    console.log("playerArrayRanking")
    console.log(playerArrayRanking)
    update(playerArrayRanking)
    return playerArrayRanking
}

  
   
