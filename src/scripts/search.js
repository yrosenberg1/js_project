import * as d3 from 'd3';
// const searchBar = document.querySelector("input");
// let players = [];
// //Event listener to register user input
//Search function
const searchBar = document.getElementById('searchBar');
let playerObjects = []
const playerData = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
        
    return data
}).then( players => {
    const  playersNames = players.map(player => player.Name.toLowerCase())
console.log("playersNames:")
console.log(playersNames)
    searchBar.addEventListener('keyup', e => {
      
    const input = e.target.value.toLowerCase();
    console.log(input)
    const filteredPlayers = playersNames.filter(name => name.toLowerCase().includes(input) 
    );
        
    if (filteredPlayers.length < 10){
        filteredPlayers.forEach(playerName => {  
          const findPlayer =  players.find(player => { return  player.Name.toLowerCase() === playerName})
          console.log(findPlayer)
          if (!playerObjects.includes(findPlayer)){
              playerObjects.push(findPlayer)
          }
        } )
        

        
        // const playerObject = players.find(player => player.Name === filteredPlayers[0])
        // const playerList = d3.select("search-bar-results")
          
        // playerList.selectAll('li').data(playerObjects)
        
        //     .enter().append('li')
            
        //     // .text(d => d.Name );
        //     debugger

        playerObjects.forEach( playerObject => { 
             const playerList = document.getElementById("search-bar-results")
            const playerli = document.createElement("li")
            playerli.setAttribute("class", "search-list")
            playerli.innerText = playerObject.Name
            playerList.appendChild(playerli)
            
         })

       
        // return playerObject
    }
    const random = Math.floor(Math.random() * playerObjects.length);

   const playerObject = playerObjects[random]
   console.log("playerObject")   
   console.log(playerObject)   
   return playerObject
});

})
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





export default playerData; 
