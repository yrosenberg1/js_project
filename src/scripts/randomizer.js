import {createPlayerArrays } from "../index"
import statsTable from "./statstable"
const randomizerDiv = document.querySelector('.randomizer-container')
let randomizeButton = document.createElement('button')
        randomizeButton.setAttribute('class', 'random-button')
        randomizeButton.textContent = 'Select a Random Player'
let nameContainer = document.querySelector('.player-info-container')
let playerParagraph = document.createElement('li')
let teamParagraph = document.createElement('li')
    playerParagraph.setAttribute('class', 'player-name')
    teamParagraph.setAttribute('class', 'team-name')
    randomizerDiv.appendChild(randomizeButton)
    nameContainer.appendChild(playerParagraph)
    nameContainer.appendChild(teamParagraph)

    export function randomizer(players){
      randomizeButton.onclick = () => {
        const randomNumber = Math.floor(Math.random() * (players.length - 1))
        const randomPlayer = players[randomNumber]
        debugger
        createPlayerArrays(randomPlayer)
        statsTable(randomPlayer)
        playerParagraph.textContent = randomPlayer.Name
        teamParagraph.textContent = randomPlayer.Team
        }
    }