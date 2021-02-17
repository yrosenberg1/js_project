import * as d3 from 'd3';
import statsTable from "./statstable"
import {createChart} from "../index"
// const searchBar = document.querySelector("input");
// let players = [];
// //Event listener to register user input
//Search function
const searchBar = document.getElementById('search-bar');
const searchBarResults = document.querySelector('.search-bar-results')

let playerObject = {}
const playerData = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
        
    return data
}).then( players => {
    console.log("players")
    console.log(players)
    const  playersNames = players.map(player => player.Name)   

searchBar.addEventListener('keyup', e => {
    const input = e.target.value.toLowerCase();
    let filteredPlayersArray = []
    if (e.keyCode === 13){
        searchBar.click()
    }
    if (input){
        
        searchBar.onclick = () => {
            
            let selectedName = input
           let playerObject = players.find(player => player.Name === selectedName)
           console.log("playerObject")
           console.log(playerObject)
        }
        
    
        filteredPlayersArray = playersNames.filter(name => name.toLowerCase().startsWith(input.toLowerCase()));
        filteredPlayersArray = filteredPlayersArray.map(name => { return name = `<li> ${name} </li>`})
       
    } else {

    }

    playerList(filteredPlayersArray)
    let handleList = searchBarResults.querySelectorAll('li')
   handleList.forEach(li => li.setAttribute("onclick", choosePlayer(li) ))
    
})

function choosePlayer(el){
    let playerName = el.innerText

    searchBar.value = playerName
    
    searchBar.onclick = () => {
        let selectedName = searchBar.value
        let playerObject = players.find(player => player.Name === selectedName)  
        console.log(playerObject)
        console.log("playerObject")
        if (playerObject){
            statsTable(playerObject)
            createChart(playerObject)
            debugger
        }
    }
   
}
function playerList(players){
let list;
if (!players.length){

} else {
list = players.join('')

}
searchBarResults.innerHTML = list
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
        //     debugger

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
// debugger
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
