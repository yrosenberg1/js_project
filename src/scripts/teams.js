import * as d3 from "d3";
import { selectAll } from "d3";
import '../styles/teams.scss';

const TeamsDropdown = d3.select('.teams')

const teamNamesArray = 
[
  "Arizona Diamondbacks",
  "Atlanta Braves",
  "Baltimore Orioles",
  "Boston Red Sox",
  "Chicago White Sox",
  "Chicago Cubs",
  "Cincinnati Reds",
  "Cleveland Indians",
  "Colorado Rockies",
  "Detroit Tigers",
  "Houston Astros",
  "Kansas City Royals",
  "Los Angeles Angels",
  "Los Angeles Dodgers",
  "Miami Marlins",
  "Milwaukee Brewers",
  "Minnesota Twins",
  "New York Yankees",
  "New York Mets",
  "Oakland Athletics",
  "Philadelphia Phillies",
  "Pittsburgh Pirates",
  "San Diego Padres",
  "San Francisco Giants",
  "Seattle Mariners",
  "St. Louis Cardinals",
  "Tampa Bay Rays",
  "Texas Rangers",
  "Toronto Blue Jays",
  "Washington Nationals",
  
];     

// TeamsDropdown
//     .append('div')
//         .attr('class', 'dropdown-content-container')
//         .selectAll('li').data(teamNamesArray)
//         .enter().append('li')
//         .text(d => d)
//         .attr('class', 'team-names')
//         .attr('value', d => d)
//         .on('click', function(d){
//         
//         console.log(d.currentTarget.__data__)
//     })

const AlEastArray = 
 [
    "Baltimore Orioles",
    "Boston Red Sox",
    "New York Yankees",
    "Tampa Bay Rays",
    "Toronto Blue Jays"

 ]

const AlCentralArray =
 [
    "Chicago White Sox",
    "Cleveland Indians",
    "Detroit Tigers",
    "Kansas City Royals",
    "Minnesota Twins"

 ]

const AlWestArray =
 [
    "Houston Astros",
    "Los Angeles Angels",
    "Oakland Athletics",
    "Seattle Mariners",
    "Texas Rangers"

 ]

const NlEastArray =
 [
    "Atlanta Braves",
    "Miami Marlins",
    "New York Mets",
    "Philadelphia Phillies",
    "Washington Nationals"
        

 ]

const NlCentralArray =
 [
    "Chicago Cubs",
    "Cincinnati Reds",
    "Milwaukee Brewers",
    "Pittsburgh Pirates",
    "St. Louis Cardinals"

 ]

const NlWestArray =

 [
    "Arizona Diamondbacks",
    "Colorado Rockies",
    "Los Angeles Dodgers",
    "San Diego Padres",
    "San Francisco Giants"
 ]


  
const divisionArray = ["AL East Division", "AL Central Division", "AL West Division", "NL East Division", "NL Central Division", "NL West Division"]
const nlArray = [ "NL East Division", "NL Central Division", "NL West"]
const alArray = ["AL East Division", "AL Central Division", "AL West Division"]

// TeamsDropdown
//     .append('div')
//     .attr('class', 'dropdown-content-container')
//          .selectAll('div').data(nlArray)
//             .enter().append('div')
//             .attr("class", 'nl-div-container')
//             .text( d => d)
//         .selectAll('div').data(alArray)
//           .enter().append('div')
//          .attr("class", 'al-div-container')
//          .text( d => d)
    
    
TeamsDropdown
.append('div')
    .attr('class', 'dropdown-content-container')
    .selectAll('div').data(divisionArray)
    .enter().append('div')
    .text( d => d)
    
    

        
const dropdownTeamsContainer = document.querySelector('.dropdown-content-container')


const divisionDivs = dropdownTeamsContainer.querySelectorAll('div');
console.log("divisionDivs")
console.log(divisionDivs)
divisionDivs.forEach(div => {
    
    div.setAttribute('class', `${div.innerHTML}-container`)
})

    
;
const alEast =d3.select('.AL.East.Division-container')
const alCentral =d3.select('.AL.Central.Division-container')
const alWest =d3.select('.AL.West.Division-container')
const NlEast =d3.select('.NL.East.Division-container')
const NlCentral =d3.select('.NL.Central.Division-container')
const NlWest =d3.select('.NL.West.Division-container')

NlWest
.append('ul')
.selectAll('li').data(NlWestArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
})


NlCentral
.append('ul')
.selectAll('li').data(NlCentralArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
})

NlEast
.append('ul')
.selectAll('li').data(NlEastArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
})



alWest
.append('ul')
.selectAll('li').data(AlWestArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
})

alCentral
.append('ul')
.selectAll('li').data(AlCentralArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
})



alEast
    .append('ul')
        .selectAll('li').data(AlEastArray)
            .enter().append('li')
            .text(d => d)
            .attr('class', 'team-names')
            .attr('value', d => d)
            .on('click', function(d){
            
            console.log(d.currentTarget.__data__)
        })



// .selectAll('div').data(teamArrays)
// .enter().append('ul')
// selectAll('ul').data(function(d, i){return d})
//     .text(d => d)
//     .attr('class', 'team-names')
//     .attr('value', d => d)
//     .on('click', function(d){
//     
//     console.log(d.currentTarget.__data__)
// })

    
    
    
    
//     .selectAll('li').data(teamNamesArray)
//     .enter().append('li')
//     .text(d => d)
//     .attr('class', 'team-names')
//     .attr('value', d => d)
//     .on('click', function(d){
//     
//     console.log(d.currentTarget.__data__)
// })

        
      
       
      
     
       
      