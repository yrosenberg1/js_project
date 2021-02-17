import { csv, select, scaleLinear, max, scaleBand, axisLeft, axisBottom  } from "d3";
 import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/search.scss";
import * as d3 from 'd3';
import playerData from "./scripts/search";

import statsTable from './scripts/statstable';


// document.addEventListener("DOMContentLoaded", () => {
    //     const svg = document.getElementById('svg');
    
    // })
    
const svg = select('#svg')
console.log("svg")
console.log(svg)
const width = +svg.attr('width');
const height = +svg.attr('height');

const margin = {left: 30, top: 20, right: 100, bottom: 50}
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

//     playerData.then(playerStats =>{
//     debugger
   
//     render(playerStats)
// })

const update = data => {
    //  
   const xKeys = d => d.key
   const yValues = d => d.value
   
    
   
    const xScale = scaleBand()
        .domain(data.map(xKeys))
        .range([0, chartWidth])
        .padding(0.1);
       
        
   const yScale = scaleLinear()
        .domain([0, 100])
        // .domain([0, max(data, yValues)])
        
        .range([chartHeight, 0])
       
    const yAxis = axisLeft(yScale)
    const xAxis = axisBottom(xScale);
   
    const g = svg.append('g')
         .attr(`transform`, `translate(${margin.left}, ${margin.top})` );

    g.append('g').call(yAxis)
       
    g.append('g').call(xAxis)
            .attr(`transform`, `translate(0, ${chartHeight})` )
       
    g.selectAll('rect').data(data)
            .enter().append('rect')
            .attr('x', d => xScale(xKeys(d)))
            .attr('y', d => yScale(yValues(d)))
            .attr('width', xScale.bandwidth())
            // .attr('height', yScale(xKeys))
            .attr('height', d => chartHeight - yScale(yValues(d)))
debugger
 }


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
  export const createChart = playerObject => {
    console.log(playerObject)
    
      const playerArrayPercentage = []
      const playerArrayRanking = []
    //   console.log(playerArray)
      const xKeysPercentage = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
      const xKeysRanking = ["Games Ranking","Runs Ranking", "Hits Ranking","HR Ranking", "RBI Ranking", "BA Ranking", "OBP Ranking", "SLG Ranking", "OPS Ranking", "OPS+ Ranking"]
      for (const key in playerObject){
          if (xKeysPercentage.includes(key)){
          playerArrayPercentage.push({
              key:key,
              value: playerObject[key] * 100
          })
      }}
      for (const key in playerObject){
        if (xKeysRanking.includes(key)){
        playerArrayRanking.push({
            key:key,
            value: playerObject[key] 
        })
    }}
   
   console.log("playerArrayPercentage")
   console.log(playerArrayPercentage)
    console.log("playerArrayRanking")
    console.log(playerArrayRanking)
    
    debugger
    update(playerArrayPercentage);
}


