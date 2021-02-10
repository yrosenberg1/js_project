import { csv, select, scaleLinear, max, scaleBand, axisLeft, axisBottom  } from "d3";
import "./styles/index.scss";
import * as d3 from 'd3';

const svg = select('svg')


// document.addEventListener("DOMContentLoaded", () => {
//     const svg = document.getElementById('svg');
   
// })

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    // console.log(data[0])
    // console.log(Object.keys(data[0]));
    // const xKeys = Object.keys(data[0])
    // console.log(xKeys)
    console.log("data.columns")
console.log(data.columns)
    const columns = data.columns
   const xKeys = ["Games", "Runs Scored", "Hits", "2B", "3B", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
    
    const margin = {left: 30, top: 20, right: 100, bottom: 50}
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const xScale = scaleBand()
        .domain(xKeys)
        .range([0, chartWidth])
        .padding(0.1);
        // console.log("xscale domain")
        // console.log(xScale.domain());
        // console.log("xscale range")
        // console.log(xScale.range());
        const yScale = scaleLinear()
        .domain([0, 100])
        .range([chartHeight, 0])
        // console.log("yscale domain")
        // console.log(yScale.domain());
        // console.log("yscale range")
        // console.log(yScale.range());
        
        const yAxis = axisLeft(yScale)
        const xAxis = axisBottom(xScale);
    const g = svg.append('g')
         .attr(`transform`, `translate(${margin.left}, ${margin.top})` );

        g.append('g').call(yAxis);
        g.append('g').call(xAxis)
            .attr(`transform`, `translate(0, ${chartHeight})` )
       
        g.selectAll('rect').data(data)
            .enter().append('rect')
            .attr('y', data => yScale(data.columns))
            .attr('width', xScale.bandwidth())
            // .attr('height', yScale(xKeys))
            .attr('height',yScale(20))

 }
      
      
      //    columns = d3.map(data, function(d){return(d.group)}).keys()

//  .call(d3.axisBottom(xScale))

//     const yScale = scaleLinear()
//         .domain([0, max(data, d => d.xba )])
//         .range([0, width]);
// console.log(yScale.domain());

// svg.selectAll('rect').data(data)
//     .enter().append('rect')
//     .attr(width, 200)
//     .attr(height, d => yScale())

// }

// d3.csv("/src/dataset/2020statsBaseballSavant.csv",  d3.autoType).then(data => {
//     // data.forEach(row => {
//     //     row.year = +row.year,
//     //     row.xwoba = +row.xwoba
        
//     // })
    
//     console.log(data)
//     render(data);
// })

// d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
//     data.forEach(row => {
//     //   row.year
    
        
   
//     })
//     console.log(data)
//     render(data);
// })

d3.csv("/src/dataset/trial.csv", d3.autoType).then(data => {
    
    data.forEach(row => {
    //   row.year
    
        
   
    })
    console.log(data)
    render(data);
})
