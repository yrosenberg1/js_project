import * as d3 from 'd3';

//Search function

const search = d3.csv("/src/dataset/Bref2020_stats.csv", d3.autoType).then(data => {
    
const searchBar = document.querySelector("input");

//Event listener to register user input


searchBar.addEventListener('keyup', e => {
    const input = e.target.value.toLowerCase();
    const filtered = playersNames.filter(name => name.toLowerCase().includes(input))
    //     if (filtered.length === 1){
    //   const  selectedName = filtered[0]
    // }

})


 
    const playersNames = data.map(players => players.Name)
    console.log(playersNames)
    // let selectedName = "";

    // if (filtered.length === 1){
    //     selectedName = filtered[0]
    // }
     const selectedName = "Kevin Plawecki"
  const playerObject = selectedName ? data.find(player => player.Name === selectedName ) : ""
        const playerArray = []
        const xKeys = ["Games", "Runs Scored", "Hits", "HR", "RBI", "BA", "OBP", "SLG", "OPS", "OPS+"]
        for (const key in playerObject){
            if (xKeys.includes(key)){
            playerArray.push({
                key:key,
                value: playerObject[key] * 100
            })
        }}
    //     if (playerNames.includes(input)){
    //        playerName = input
    //    }
    
    
        // console.log(playerObject)
        //    console.log(playerArray) 
       
       
        
    
    
    
    // render(playerArray);
    return playerArray
})





export default search; 
