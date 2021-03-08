import * as d3 from 'd3';
import {playerData, playerObject} from './search';
import statsTable from "./statstable"
import {createPlayerArrays, removeChartFn, removeTable } from "../index"
import {teamPage} from './teams'
const infoContainer = d3.select('.player-info-container')

const mainContainer = document.querySelector('.main-content-container')

//  console.log("teamParagraph")
//  console.log(teamParagraph)
let nameContainer = document.querySelector('.player-info-container')
let playerInfoUl = nameContainer.querySelector('.player-info-ul')
  
let playerParagraph = document.createElement('li');
let teamParagraph = document.createElement('li');
playerParagraph.setAttribute('class', 'player-name')
    teamParagraph.setAttribute('class', 'team-name')
    
    playerInfoUl.appendChild(playerParagraph)
    playerInfoUl.appendChild(teamParagraph)
const yearSelecterButton = d3.select('.year-selecter-btn')
const yearSelecterBtnContainer = d3.select('.Year-selector-btn-container')
// let nameContainer = document.querySelector('.player-info-container')
let seasonParagraph = document.createElement('li');
seasonParagraph.setAttribute('class', 'season-name')
playerInfoUl.appendChild(seasonParagraph)
// let teamParagraph = nameContainer.querySelector('.team-name')

// const chartContainer = document.querySelector('.chart-container')
const chartContainer = d3.select('.chart-container')
const NoSeasondiv = document.createElement('div')
NoSeasondiv.setAttribute('class','No-season-results-div') 
NoSeasondiv.setAttribute('display','none') 

// chartContainer.appendChild(NoSeasondiv)
mainContainer.appendChild(NoSeasondiv)

 const NoSeason = d3.select('.No-season-results-div')
 NoSeason
 .style('display', 'none')
    .append('p')
        .attr('class', 'no-season-para')
        .attr('display', 'none')
        .text('Season Not Found')

const yearArray = [2020, 2019, 2018, 2017, 2016]
export let season;
let player;
let playerName;
let teamSelected;

export const teamPageActive = (team) => {
teamSelected = team

}
export const inputName = (selectedName) => {
    
  playerName = selectedName
    
}


export const importPlayers = players => {
    

   player = players.find(player => player.Name === playerName )
  
}

yearSelecterButton
    .text('Season')

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
             

             if (!teamSelected){
                 
            yearSelecterFn(season, player)
             } else {
                 
                teamPage(teamSelected)
             }
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
    playerParagraph.textContent = player.Name
    seasonParagraph.textContent = season
    teamParagraph.textContent = player.Team
    NoSeason
    .style('display', 'none')
    infoContainer
    .style('display', 'block')
    playerInfoUl.style.display = 'block'
  
    } else {
       
        removeChartFn();
        removeTable();
        if (playerName){
            
        NoSeason
        .style('display', 'block')
        chartContainer
        .style('display', 'none')
        // playerInfoUl.style.display = 'none'
        seasonParagraph.textContent = season
        teamParagraph.textContent = " "
        }
    
    }
   return season
}
