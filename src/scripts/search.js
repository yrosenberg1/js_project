import * as d3 from 'd3';

//Search function

const search = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
    
const searchBar = document.querySelector("input");

//Event listener to register user input


searchBar.addEventListener('keyup', e => {
    const input = e.target.value.toLowerCase();
    console.log(input)
    const filtered = playersNames.filter(name => name.toLowerCase().includes(input))
    //     if (filtered.length === 1){
    //   const  selectedName = filtered[0]
    // }
console.log(filtered)
})


 
    const playersNames = data.map(players => players.Name)
    console.log(playersNames)
    // let selectedName = "";

    // if (filtered.length === 1){
    //     selectedName = filtered[0]
    // }
     const selectedName = "José Abreu"
  const playerObject = selectedName ? data.find(player => player.Name === selectedName ) : ""
        const playerArray = []
        console.log(playerArray)
        document.getElementById("percentage-button").addEventListener("click", percentageFunction);
        document.getElementById("ranking-button").addEventListener("click", rankingFunction);

        const percentageFunction = () =>{ xKeysPercentile = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
        
        for (const key in playerObject){
            if (xKeysPercentile.includes(key)){
            playerArray.push({
                key:key,
                value: playerObject[key] * 100
            })
        }}
        return playerArray
    }

        const rankingFunction = () =>{
        const xKeysRankings = ["Games Ranking","Runs Ranking", "Hits Ranking","HR Ranking", "RBI Ranking", "BA Ranking", "OBP Ranking", "SLG Ranking", "OPS Ranking", "OPS+ Ranking"]
        for (const key in playerObject){
            if (xKeysRankings.includes(key)){
            playerArray.push({
                key:key,
                value: playerObject[key] * 100
            })
        }}
        return playerArray}
    //     if (playerNames.includes(input)){
    //        playerName = input
    //    }
    
    
        // console.log(playerObject)
        //    console.log(playerArray) 
       
       
        
    
    
debugger  
  // render(playerArray);
    return playerArray
    
})





export default search; 
