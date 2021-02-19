import * as d3 from 'd3';
import statsTable from "./statstable"
import {createPlayerArrays } from "../index"
import {randomizer} from "./randomizer"



let playerParagraph = document.querySelector('.player-name')

let teamParagraph = document.querySelector('.team-name')
const searchBar = document.getElementById('search-bar');
const searchBarResults = document.querySelector('.search-bar-results')
const playerSearchInput = document.querySelector('.player-search-input')
// const randomizerDiv = document.querySelector('.randomizer-container')
const playerData = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
        
    return data
}).then( players => {
    console.log("players")
    console.log(players)
    randomizer(players)
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
                searchBar.value = "No Matching Player found"
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
//    handleList.forEach(li =>  li.addEventListener("click", choosePlayer(li)))
// let handleList = d3.selectorAll(".search-bar-li")
//    handleList.on('click', `${choosePlayer(`li`)}`)
//  for (let index = 0; index < handleList.length; index++) {
//      handleList[index].onclick=`${choosePlayer(`handleList[index]`)}`
     
 }
)
   

function choosePlayer(el){
    
    let playerName = el.innerText
    console.log(playerName)
    searchBar.value = playerName
    
    searchBar.onclick = () => {
        
        let selectedName = searchBar.value
        let playerObject = players.find(player => player.Name === selectedName)  
     
        if (playerObject){
            setTimeout(clearSearchBar, 2000)
            statsTable(playerObject)
            createPlayerArrays(playerObject)
            playerParagraph.textContent = playerObject.Name
            teamParagraph.textContent = playerObject.Team
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


})



export default playerData; 
