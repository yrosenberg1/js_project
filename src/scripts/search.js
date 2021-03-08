import * as d3 from 'd3';
import statsTable from "./statstable"
import {createPlayerArrays } from "../index"
import {randomizer} from "./randomizer"
import Bref2020 from "../dataset/Bref2020.csv";
import Bref2019 from "../dataset/Bref2019.csv";
import Bref2018 from "../dataset/Bref2018.csv";
import Bref2017 from "../dataset/Bref2017.csv";
import Bref2016 from "../dataset/Bref2016.csv";
import {inputName, season, importPlayers} from "./year_selector";
import {teamPlayers} from "./teams"


    let playerParagraph = document.querySelector('.player-name')
    let teamParagraph = document.querySelector('.team-name')
    let seasonParagraph = document.querySelector('.season-name')
    const searchBar = document.getElementById('search-bar');
    const searchBarResults = document.querySelector('.search-bar-results')
    const playerSearchInput = document.querySelector('.player-search-input')
    const NoSeason = d3.select('.No-season-results-div')
    const infoContainer = d3.select('.player-info-container')
    const playerInfoUl = d3.select('player-info-ul')
    
    season

   
   export function playerData(season){
     if (!season){
        season = 2020
     } 
       
     const data = season
     
            let players; 
            switch (data) {
               
               case 2020:
                    players = Bref2020
                    break;

               case 2019:
                    players = Bref2019
                    break;
                    
               case 2018:
                    players = Bref2018
                    break;
               
               case 2017:
                    players = Bref2017
                    break;
                
                case 2016:
                    players = Bref2016
                    break;
            }
            console.log(players)
            randomizer(players, season)
            importPlayers(players)
            teamPlayers(players, season)
    const  playersNames = players.map(player => player.Name)   
            
        searchBar.addEventListener('keyup', e => {
            
        const input = e.target.value.toLowerCase();
        let filteredPlayersArray = []
        if (e.keyCode === 13){
            searchBar.click()
         }

        if (input){
        
        searchBar.onclick = () => {
            if (!playerObject){
                searchBar.value = "No Player Found"
                playerSearchInput.classList.remove('active')
               
            }
            let selectedName = input
            let playerObject = players.find(player => player.Name === selectedName)
           console.log("playerObject")
           console.log(playerObject)
           
        }
       
    
        filteredPlayersArray = playersNames.filter(name => name.toLowerCase().startsWith(input.toLowerCase()));
        filteredPlayersArray = filteredPlayersArray.map(name => { return name = `<li class="search-bar-li"> ${name} </li>`})
        playerSearchInput.classList.add('active')
    

    playerList(filteredPlayersArray)
    let handleList = searchBarResults.querySelectorAll('li')
    for (let i = 0; i< handleList.length; i++) {
      handleList[i].addEventListener('click', function(){
         
         choosePlayer(this)
         searchBar.click()
      });
       
    }
} else {
    
    playerSearchInput.classList.remove('active')
}

})
   

function choosePlayer(el){
    
    let playerName = el.innerText
    
    searchBar.value = playerName
    
    searchBar.onclick = () => {
        
        let selectedName = searchBar.value
        let playerObject = players.find(player => player.Name === selectedName)  
        if (playerObject){
            
            setTimeout(clearSearchBar, 2000)
            statsTable(playerObject)
            createPlayerArrays(playerObject)
            inputName(selectedName)
            playerParagraph.textContent = playerObject.Name
            teamParagraph.textContent = playerObject.Team
            seasonParagraph.textContent = season
            NoSeason
             .style('display', 'none')
            infoContainer
             .style('display', 'block')
            
        } 
            
        playerSearchInput.classList.remove('active')
    }
   
    function clearSearchBar() {
        searchBar.value = ""
    }
}

function playerList(players){
let list;
if (!players.length){
    playerSearchInput.classList.remove('active')
} else {
  `<ul>${players}</ul>`
 list = players.join('')
 
 
}

searchBarResults.innerHTML = list;

}    


}

    

export default playerData(); 
