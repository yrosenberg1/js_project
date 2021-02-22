import * as d3 from 'd3'
import { csv, select, scaleLinear, max, scaleBand, axisLeft, axisBottom,   } from "d3";
import {createPlayerArrays} from "../index"

    const width = 1000
    const height = 500
    const margin = {left: 100, top: 30, right: 100, bottom: 50}
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = select('.loli-chart-container')
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append('g')
        .attr(`transform`, `translate(${margin.left}, ${margin.top})`)
    
        
    const x = scaleBand()
        .range([0, chartWidth])
        .padding(.5) 

    const loliXaxis = svg.append('g')
        .attr(`transform`, `translate(0, ${chartHeight})`)
        

    const y = scaleLinear()
       .range([chartHeight, 0])

    const loliYaxis =  svg.append('g')
       .attr("class", "yAxis")
       // orients the x and y axis

   
           
        const array = [
        {key: "Games", value: 411, setting: "ranking"},
        {key: "Runs", value: 345, setting: "ranking"},
        {key: "Hits", value: 418, setting: "ranking"},
        {key: "HR", value: 253, setting: "ranking"},
        {key: "RBI", value: 415, setting: "ranking"},
        {key: "BA", value: 403, setting: "ranking"},
        {key: "OBP", value: 237, setting: "ranking"},
        {key: "SLG", value: 238, setting: "ranking"},
        {key: "OPS", value: 221, setting: "ranking"}
    ]


export const lineChart = (array) => {
  

 const xKeys = d => d.key
 const yValues = d => d.value
 const setting = array[0].setting

 if (setting === "ranking"){
     x.domain[0, 700]

} else {
    x.domain([0, 100])

    }
    loliXaxis.transition().duration(500).call(axisBottom(x))
    
    
    y
        .domain(array.map(yValues))
       

        loliYaxis.transition().duration(500).call(axisLeft(y))    
        //  const yAxis = axisLeft(y)
        //  const vertical = svg.append('g')
        // .attr("class", "yAxis")

  debugger
   
    // yScale.domain([700, 0])

    // xScale.domain(data.map(yValues))
//    xAxis.transition().duration(1000).call(axisBottom(x))

//     yAxis.transition().duration(1000).call(axisLeft(y))

const v = svg.selectAll('.myline').data(array)
//  u
//  .attr(`transform`, `translate(${margin.left},${margin.top})`)
 v
  .enter().append('line')
  .merge(v).transition().duration(1000)    
  .attr('x1', d => x(xKeys(d)))
  .attr('x2', d => x(xKeys(d)))
  .attr('y1', y(0))
  .attr('y2', d => y(yValues(d)))

  .attr('stroke', 'black') 
// .attr('height', yScale(xKeys)) 
 

v.exit().remove()
debugger
}

lineChart(array)