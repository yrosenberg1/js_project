import * as d3 from 'd3';
import {playerData, playerObject} from './search';
import statsTable from "./statstable"
import {createPlayerArrays, removeChartFn, removeTable } from "../index"
const infoContainer = d3.select('.player-info-container')


//  console.log("teamParagraph")
//  console.log(teamParagraph)
let nameContainer = document.querySelector('.player-info-container')
let playerParagraph = document.createElement('li');
let teamParagraph = document.createElement('li');
playerParagraph.setAttribute('class', 'player-name')
    teamParagraph.setAttribute('class', 'team-name')
    nameContainer.appendChild(playerParagraph)
    nameContainer.appendChild(teamParagraph)
const yearSelecterButton = d3.select('.year-selecter-btn')
const yearSelecterBtnContainer = d3.select('.Year-selector-btn-container')
// let nameContainer = document.querySelector('.player-info-container')
let seasonParagraph = document.createElement('li');
seasonParagraph.setAttribute('class', 'season-name')
nameContainer.appendChild(seasonParagraph)
// let teamParagraph = nameContainer.querySelector('.team-name')

let chartContainer = document.querySelector('.chart-container')
const NoSeasondiv = document.createElement('div')
NoSeasondiv.setAttribute('class','No-season-results-div') 
NoSeasondiv.setAttribute('display','none') 

 chartContainer.appendChild(NoSeasondiv)

 const NoSeason = d3.select('.No-season-results-div')
 NoSeason
 .style('display', 'none')
    .append('p')
        .attr('class', 'no-season-para')
        .attr('display', 'none')
        .text('No season Found')

const yearArray = [2020, 2019, 2018, 2017, 2016]
export let season;
let player;
let playerName;

export const inputName = (selectedName) => {
  playerName = selectedName
    
}

export const importPlayers = players => {
    

   player = players.find(player => player.Name === playerName )
  
}

yearSelecterButton
    .text('Select Season:')

yearSelecterBtnContainer
    .append('div')
        .attr('class', 'season-dropdown-content')
        .selectAll('button').data(yearArray)
        .enter().append('button')
        .text( d => d)
        .attr('value', d => d)
        .attr('class', "season-selector-buttons")
        .on('click', function(d) {
             season = +d.currentTarget.value
             
             playerData(season)
             

             
            yearSelecterFn(season, player)
        
        })
      
 const dropDownList = d3.select('.season-dropdown-content')
        
 const seasonSelecterButton = d3.select('.season-selector-buttons')
 
 
      
     

       
export const yearSelecterFn = (value, player) => {
    
    
    if ( value !== season){
        
        season = value
    }
    
    if (player){
        
    statsTable(player)
    createPlayerArrays(player)
    seasonParagraph.textContent = season
    teamParagraph.textContent = player.Team
    NoSeason
    .style('display', 'none')
    infoContainer
    .style('display', 'block')
  
    } else {
       
        removeChartFn();
        removeTable();
        if (playerName){
            debugger
        NoSeason
        .style('display', 'block')
        infoContainer
        .style('display', 'none')
        }

    }
   return season
}
