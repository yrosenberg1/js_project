import { select, format, scaleLinear, max, scaleBand, axisLeft, axisBottom  } from "d3";
 import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/navbar.scss";
import "./styles/search.scss";
import "./styles/chart.scss";
import "./styles/year_selecter.scss";
import "./styles/main.scss";
import "./styles/table.scss";
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
const chartContainer = d3.select('.chart-container')
const playerInfoUl = d3.select('.player-info-ul')

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
            .text('Ranking')
            .style('opacity', 1)
            .style('display', "block")
            
        createPlayerArrayPercentage(playerObject);  
              break;
            case 0:
                toggleButton
                .text('Percentile')
                .style('opacity', 1)
                .attr('display', "block")
                
            createPlayerArraysRanking(playerObject)
          default:
              break;
      } 
        
        player = playerObject

        chartContainer
         .style('display', "flex")
        playerInfoUl
         .style('display', "block")

         
    }

    
    toggleButton
        .on('click', updateSelecter)
        
    const width = 1000
    const height = 500
    const margin = {left: 100, top: 60, right: 100, bottom: 50}
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = select('.chart-container')
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr('class', 'svg-box')
    .append('g')
        .attr(`transform`, `translate(${margin.left}, ${margin.top})`)
    
        svg.append('text')
        .attr('y', -25)
        .attr('x', 150)
        .attr('class', 'chart-header-text')
        .text(`Player Performance Relative to League`)
        .style('fill', '#bb0d3e')
        
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
           
      const yPercentile = yAxis.append('text')
            .attr('y', 0)
            .attr('x', 0)
            .attr('class', 'yAxis-text-percentile')
            .text(`Percentile`)
            .style('fill', '#bb0d3e')
            .style('display', "none")
            .attr('transform', 'rotate(-90) translate(-120, -70)')
            

     const yRanking = yAxis.append('text')
            // .attr('y', 0)
            // .attr('x', 0)
            .attr('class', 'yAxis-text-ranking')
            .text(`Ranking`)
            .style('fill', '#bb0d3e')
            .style('display', "none")
            // .attr(`transform`, `translate(30, 30)`)
            .attr('transform', 'rotate(-90) translate(-160, -70)')

const update = data => {
    
    // removeChart
    // .style('display', "block")
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
       
        yRanking.transition().duration(1000).style('display', 'block')
        yPercentile.transition().duration(1000).style('display', 'none')
        yAxis.transition().duration(1000).call(axisLeft(yScale).tickSize(-chartWidth))
        
    } else {
    yScale.domain([0, 1])
    yRanking.transition().duration(1000).style('display', 'none')
    yPercentile.transition().duration(1000).style('display', 'block')
    yAxis.transition().duration(1000)
        .call(axisLeft(yScale).tickFormat(format(".0%")).tickSize(-chartWidth))
        
    
    }
    

        xScale.domain(data.map(xKeys))
       xAxis.transition().duration(1000).call(axisBottom(xScale))
    
      xAxis.selectAll('.domain, .tick line').remove()
      yAxis.selectAll('.domain').remove()
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
    
    yAxis.merge(yAxis).exit().remove()
    u.exit().remove()
}
    



//     const xKeys = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
//
//       const xKeysPercentage = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
//       const xKeysRanking = ["Games Ranking","Runs Ranking", "Hits Ranking","HR Ranking", "RBI Ranking", "BA Ranking", "OBP Ranking", "SLG Ranking", "OPS Ranking", "OPS+ Ranking"]
//      
   

 export const createPlayerArrayPercentage = playerObject => {
     
    const xKeysPercentage = ["Games", "Runs", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
    const playerArrayPercentage = []
    for (const key in playerObject){
        if (xKeysPercentage.includes(key)){
        playerArrayPercentage.push({
            key:key,
            value: playerObject[key],
            setting: "percentage" 
        })
    }}
    update(playerArrayPercentage)
    // lineChart(playerArrayPercentage)
    return playerArrayPercentage
 }
 
 export const createPlayerArraysRanking = (playerObject) => {
     
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

