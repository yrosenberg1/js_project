import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom  } from "d3";
 import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/navbar.scss";
import "./styles/search.scss";
import "./styles/chart.scss";
import "./styles/year_selecter.scss";
import * as d3 from 'd3';
import playerData from "./scripts/search";
import statsTable from './scripts/statstable';
import Teams from './scripts/teams';

import yearSelecter, { importPlayers } from './scripts/year_selector'
let selecter = 1
let player;

const toggleButton = select('#percentage-ranking-toggle-button')
const removeChart = select('.remove-chart-button')
const teamIndex = select ('.team-players-div')
const updateSelecter = () => {
        
    if (selecter === 0){
        selecter = 1
        
        
    } else {
        selecter = 0
       
    }
    createPlayerArrays(player)
}  
  

    export const createPlayerArrays = (playerObject) => {
      switch (selecter) {
          case 1:
            toggleButton
            .text('by Ranking')
            .style('opacity', 1)
            .style('display', "block")
            
        createPlayerArrayPercentage(playerObject);  
              break;
            case 0:
                toggleButton
                .text('by Percentage')
                .style('opacity', 1)
                .attr('display', "block")
                
            createPlayerArraysRanking(playerObject)
          default:
              break;
      } 
        // if (selecter === 1){
        //     toggleButton
        //     .text('by Ranking')
        //     .style('opacity', 1)
        //     .style('display', "block")
        // createPlayerArrayPercentage(playerObject);
        // } else {
        //     toggleButton
        //     .text('by Percentage')
        //     .style('opacity', 1)
        //     .attr('display', "block")
        // createPlayerArraysRanking(playerObject)
        // }
        player = playerObject
        
       
        
    }
    
  

    toggleButton
        .on('click', updateSelecter)
        


    const width = 1000
    const height = 500
    const margin = {left: 100, top: 30, right: 100, bottom: 50}
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = select('.chart-container')
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append('g')
        .attr(`transform`, `translate(${margin.left}, ${margin.top})`)
    
        
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
           


    
const update = data => {
    
    removeChart
    .style('display', "block")
    toggleButton
     .style('display', "block")
    const g = svg.selectAll('g')
     .attr('display', "display")
     teamIndex
     .style('display', "none")


        const xKeys = d => d.key
        const yValues = d => d.value
        const setting = data[0].setting
       
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
    



//     const xKeys = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
//
//       const xKeysPercentage = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
//       const xKeysRanking = ["Games Ranking","Runs Ranking", "Hits Ranking","HR Ranking", "RBI Ranking", "BA Ranking", "OBP Ranking", "SLG Ranking", "OPS Ranking", "OPS+ Ranking"]
//      
   

 export const createPlayerArrayPercentage = playerObject => {
     
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
    // lineChart(playerArrayPercentage)
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
    
    update(playerArrayRanking)
    console.log(playerArrayRanking)
    // lineChart(playerArrayRanking)
    return playerArrayRanking
}

  
export const removeChartFn = () => {
    const u = svg.selectAll('rect').remove()
    const g = svg.selectAll('g')
        .attr('display', "none")
        toggleButton
        .style('display', "none")
        removeChart
        .style('display', "none")
}
   
export const removeTable = () => {
        let table = document.querySelector('#stats-table')
        if(table) table.remove()  
}

 removeChart
    .on('click', function(d) {
        removeChartFn() 
        removeTable()
        console.log(player)
        lineChart(player)
        
    })

