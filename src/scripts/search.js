import * as d3 from 'd3';
import statsTable from "./statstable"
import {createPlayerArrays, createPlayerArraysRanking, createPlayerArrayPercentage } from "../index"
// const searchBar = document.querySelector("input");
// let players = [];
// //Event listener to register user input
//Search function
const searchBar = document.getElementById('search-bar');
const searchBarResults = document.querySelector('.search-bar-results')
const playerSearchInput = document.querySelector('.player-search-input')
const randomizerDiv = document.querySelector('.randomizer-container')
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
    debugger
    playerSearchInput.classList.remove('active')
}
//    handleList.forEach(li =>  li.addEventListener("click", choosePlayer(li)))
// let handleList = d3.selectorAll(".search-bar-li")
//    handleList.on('click', `${choosePlayer(`li`)}`)
//  for (let index = 0; index < handleList.length; index++) {
//      handleList[index].onclick=`${choosePlayer(`handleList[index]`)}`
     
 }
)
    function randomizer(players){
        debugger
        let randomizeButton = document.createElement('button')
            randomizeButton.setAttribute('class', 'random-button')
            randomizeButton.textContent = 'Select a Random Player'
        randomizerDiv.appendChild(randomizeButton)
        randomizeButton.onclick = () => {
            const randomNumber = Math.floor(Math.random() * (players.length - 1))
            console.log((players[randomNumber]))
            createPlayerArrays(players[randomNumber])
        //     
        }
}

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

// $.ajax({})

//  function selectPlayer(players){

// }
// const playerObject = players.find(player => player.Name === filteredPlayers[0])
        // if (filteredPlayers.length < 10){
        //     filteredPlayers.forEach(playerName => {  
            //       const findPlayer =  players.find(player => { return  player.Name.toLowerCase() === playerName})
            //       console.log(findPlayer)
    //       if (!playerObjects.includes(findPlayer)){
    //           playerObjects.push(findPlayer)
    //       }
    //     } )
        
        // const playerList = d3.select("search-bar-results")
          
        // playerList.selectAll('li').data(playerObjects)
        
        //     .enter().append('li')
            
        //     // .text(d => d.Name );
        //     

//         const playerList = d3.select('search-bar-container')
//             playerList.selectAll('li').data()

       
//         // return playerObject
    
//     const random = Math.floor(Math.random() * playerObjects.length);

//    const playerObject = playerObjects[random]
//    console.log("playerObject")   
//    console.log(playerObject)   
//    return playerObject
// });

// })
//     console.log(input)
//     const filtered = playersNames.filter(name => name.toLowerCase().includes(input))
//     //     if (filtered.length === 1){
//     //   const  selectedName = filtered[0]
//     // }
// // console.log(filtered)
//  if (filtered.length < 10){
//      const list = 
//  }
// 
// })
// console.log("searchResult:")
// console.log(searchResult)
 
//     const playersNames = data.map(players => players.Name)
//     console.log(playersNames)
//     // let selectedName = "";

//     // if (filtered.length === 1){
//     //     selectedName = filtered[0]
//     // }
//      const selectedName = "José Abreu"
//   const playerObject = selectedName ? data.find(player => player.Name === selectedName ) : ""
// //   const playerArray = []
// //   console.log(playerArray)
// //   const xKeys = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
// //   for (const key in playerObject){
// //       if (xKeys.includes(key)){
// //       playerArray.push({
// //           key:key,
// //           value: playerObject[key] * 100
// //       })
// //   }}
//     //     if (playerNames.includes(input)){
//     //        playerName = input
//     //    }
    
    
//         // console.log(playerObject)
//         //    console.log(playerArray) 
       
       
        
    
    
    
//     // render(playerArray);
//     return playerArray
// })

})



export default playerData; 
