import * as d3 from 'd3';
import {playerData, playerObject} from './search';
import statsTable from "./statstable"
import {createPlayerArrays } from "../index"


const yearSelecterButton = d3.select('.year-selecter-btn')
const yearSelecterBtnContainer = d3.select('.Year-selector-btn-container')
const yearArray = [2020, 2019, 2018]
export let season = 2020;
let player;
let playerName;

export const inputName = (selectedName) => {
  playerName = selectedName
    debugger
}

export const importPlayers = players => {
    debugger

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
             debugger
            yearSelecterFn(season, player)
        debugger
        })
      
 const dropDownList = d3.select('.season-dropdown-content')
        
 const seasonSelecterButton = d3.select('.season-selector-buttons')
 
 
      
     

       
export const yearSelecterFn = (value, player) => {
    debugger
    
    if ( value !== season){
        debugger
        season = value
    }
    debugger
    if (player){
        debugger
    statsTable(player)
    createPlayerArrays(player)
    }
   return season
}
