import {createPlayerArrays } from "../index"
import statsTable from "./statstable"
import { inputName } from "./year_selector"
import * as d3 from 'd3';

const randomizerDiv = document.querySelector('.randomizer-container')
let randomizeButton = document.createElement('button')
        randomizeButton.setAttribute('class', 'random-button')
        randomizeButton.textContent = 'Random Player Selecter'
randomizerDiv.appendChild(randomizeButton)
const NoSeason = d3.select('.No-season-results-div')
let nameContainer = document.querySelector('.player-info-container')

let seasonParagraph = nameContainer.querySelector('.season-name')
let playerParagraph = nameContainer.querySelector('.player-name');
let teamParagraph = nameContainer.querySelector('.team-name');
const infoContainer = d3.select('.player-info-container')
// let playerParagraph = document.createElement('li');
// let teamParagraph = document.createElement('li');
    // playerParagraph.setAttribute('class', 'player-name')
    // teamParagraph.setAttribute('class', 'team-name')
    
    // nameContainer.appendChild(playerParagraph)
    // nameContainer.appendChild(teamParagraph)
    

    export function randomizer(players, season){
      randomizeButton.onclick = () => {
        const randomNumber = Math.floor(Math.random() * (players.length - 1))
        const randomPlayer = players[randomNumber]
        
        createPlayerArrays(randomPlayer)
        statsTable(randomPlayer)
        inputName(randomPlayer.Name)
        playerParagraph.textContent = randomPlayer.Name
        teamParagraph.textContent = randomPlayer.Team
        seasonParagraph.textContent = season
        NoSeason
        .style('display', 'none')
        infoContainer
        .style('display', 'block')
        
        }
    }