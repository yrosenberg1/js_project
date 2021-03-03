import * as d3 from "d3";
import { selectAll } from "d3";
import {yearSelecterFn, importPlayers, inputName} from "./year_selector";

import {createPlayerArrays, removeChartFn, removeTable } from "../index"
import '../styles/teams.scss';

const TeamsDropdown = d3.select('.teams')
const mainContainer = d3.select('.main-content-container')
const playerDiv =  mainContainer.append('div').attr('class', 'team-players-div')

let teamSelected;
let playersArray;
let year
let playerParagraph = document.querySelector('.player-name')
let teamParagraph = document.querySelector('.team-name')
let seasonParagraph = document.querySelector('.season-name')
const infoContainer = d3.select('.player-info-container')
export const teamPlayers = (players, season) =>{
playersArray = players
year = season
}

const teamNamesArray = 
[
  "Arizona Diamondbacks",
  "Atlanta Braves",
  "Baltimore Orioles",
  "Boston Red Sox",
  "Chicago White Sox",
  "Chicago Cubs",
  "Cincinnati Reds",
  "Cleveland Indians",
  "Colorado Rockies",
  "Detroit Tigers",
  "Houston Astros",
  "Kansas City Royals",
  "Los Angeles Angels",
  "Los Angeles Dodgers",
  "Miami Marlins",
  "Milwaukee Brewers",
  "Minnesota Twins",
  "New York Yankees",
  "New York Mets",
  "Oakland Athletics",
  "Philadelphia Phillies",
  "Pittsburgh Pirates",
  "San Diego Padres",
  "San Francisco Giants",
  "Seattle Mariners",
  "St. Louis Cardinals",
  "Tampa Bay Rays",
  "Texas Rangers",
  "Toronto Blue Jays",
  "Washington Nationals",
  
];     
playerDiv.selectAll('ul').data(teamNamesArray).enter().append('ul').style('display', 'none')
// TeamsDropdown
//     .append('div')
//         .attr('class', 'dropdown-content-container')
//         .selectAll('li').data(teamNamesArray)
//         .enter().append('li')
//         .text(d => d)
//         .attr('class', 'team-names')
//         .attr('value', d => d)
//         .on('click', function(d){
//         
//         console.log(d.currentTarget.__data__)
//     })

const AlEastArray = 
 [
    "Baltimore Orioles",
    "Boston Red Sox",
    "New York Yankees",
    "Tampa Bay Rays",
    "Toronto Blue Jays"

 ]

const AlCentralArray =
 [
    "Chicago White Sox",
    "Cleveland Indians",
    "Detroit Tigers",
    "Kansas City Royals",
    "Minnesota Twins"

 ]

const AlWestArray =
 [
    "Houston Astros",
    "Los Angeles Angels",
    "Oakland Athletics",
    "Seattle Mariners",
    "Texas Rangers"

 ]

const NlEastArray =
 [
    "Atlanta Braves",
    "Miami Marlins",
    "New York Mets",
    "Philadelphia Phillies",
    "Washington Nationals"
        

 ]

const NlCentralArray =
 [
    "Chicago Cubs",
    "Cincinnati Reds",
    "Milwaukee Brewers",
    "Pittsburgh Pirates",
    "St. Louis Cardinals"

 ]

const NlWestArray =

 [
    "Arizona Diamondbacks",
    "Colorado Rockies",
    "Los Angeles Dodgers",
    "San Diego Padres",
    "San Francisco Giants"
 ]


  
const divisionArray = ["AL EAST", "AL CENTRAL", "AL WEST", "NL EAST", "NL CENTRAL", "NL WEST"]
const nlArray = [ "NL East Division", "NL Central Division", "NL West"]
const alArray = ["AL East Division", "AL Central Division", "AL West Division"]

// TeamsDropdown
//     .append('div')
//     .attr('class', 'dropdown-content-container')
//          .selectAll('div').data(nlArray)
//             .enter().append('div')
//             .attr("class", 'nl-div-container')
//             .text( d => d)
//         .selectAll('div').data(alArray)
//           .enter().append('div')
//          .attr("class", 'al-div-container')
//          .text( d => d)
    
    
TeamsDropdown
.append('div')
    .attr('class', 'dropdown-content-container')
    .selectAll('div').data(divisionArray)
    .enter().append('div').append('p')
    .text( d => d)
    
    

        
const dropdownTeamsContainer = document.querySelector('.dropdown-content-container')


const divisionDivs = dropdownTeamsContainer.querySelectorAll('div');
console.log("divisionDivs")
console.log(divisionDivs)
divisionDivs.forEach(div => {
    debugger
    // div.setAttribute('class', `${div.innerHTML}-container`)
    div.setAttribute('class', `${div.textContent}-container`)
})

    
;
const alEast =d3.select('.AL.EAST-container')
const alCentral =d3.select('.AL.CENTRAL-container')
const alWest =d3.select('.AL.WEST-container')
const NlEast =d3.select('.NL.EAST-container')
const NlCentral =d3.select('.NL.CENTRAL-container')
const NlWest =d3.select('.NL.WEST-container')

NlWest
.append('ul')
.selectAll('li').data(NlWestArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
    teamSelected = d.currentTarget.__data__
    teamPage(teamSelected)
})


NlCentral
.append('ul')
.selectAll('li').data(NlCentralArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    // console.log(d.currentTarget.__data__)
    teamSelected = d.currentTarget.__data__
    teamPage(teamSelected)
})

NlEast
.append('ul')
.selectAll('li').data(NlEastArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
     teamSelected = d.currentTarget.__data__
    teamPage(teamSelected)
})



alWest
.append('ul')
.selectAll('li').data(AlWestArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
    teamSelected = d.currentTarget.__data__
    teamPage(teamSelected)
})

alCentral
.append('ul')
.selectAll('li').data(AlCentralArray)
    .enter().append('li')
    .text(d => d)
    .attr('class', 'team-names')
    .attr('value', d => d)
    .on('click', function(d){
    
    console.log(d.currentTarget.__data__)
    teamSelected = d.currentTarget.__data__
    teamPage(teamSelected)
})



alEast
    .append('ul')
        .selectAll('li').data(AlEastArray)
            .enter().append('li')
            .text(d => d)
            .attr('class', 'team-names')
            .attr('value', d => d)
            .on('click', function(d){
            
            console.log(d.currentTarget.__data__)
            teamSelected = d.currentTarget.__data__
            teamPage(teamSelected)
        })

const teamsNamesArrayObjects = [
  {"Arizona Diamondbacks":'ARI'},
  {"Atlanta Braves":'ATL'},
  {"Baltimore Orioles":'BAL'},
  {"Boston Red Sox":'BOS'},
  {"Chicago White Sox":'CHW'},
  {"Chicago Cubs": 'CHC'},
  {"Cincinnati Reds":'CIN'},
  {"Cleveland Indians":'CLE'},
  {"Colorado Rockies":'COL'},
  {"Detroit Tigers":'DET'},
  {"Houston Astros":'HOU'},
  {"Kansas City Royals":'KCR'},
  {"Los Angeles Angels": 'LAA'},
  {"Los Angeles Dodgers":'LAD'},
  {"Miami Marlins":'MIA'},
  {"Milwaukee Brewers":'MIL'},
  {"Minnesota Twins":'MIN'},
  {"New York Yankees":'NYY'},
  {"New York Mets": 'NYM'},
  {"Oakland Athletics":'OAK'},
  {"Philadelphia Phillies":'PHI'},
  {"Pittsburgh Pirates":'PIT'},
  {"San Diego Padres":'SDP'},
  {"San Francisco Giants":'SFG'},
  {"Seattle Mariners":'SEA'},
  {"St. Louis Cardinals":'STL'},
  {"Tampa Bay Rays":'TBR'},
  {"Texas Rangers":'TEX'},
  {"Toronto Blue Jays":'TOR'},
  {"Washington Nationals":'WSN'},

]

const teamsNamesObjects = {
 "Arizona Diamondbacks": 'ARI',
 "Atlanta Braves": 'ATL',
 "Baltimore Orioles": 'BAL',
 "Boston Red Sox": 'BOS',
 "Chicago White Sox": 'CHW',
 "Chicago Cubs": 'CHC',
 "Cincinnati Reds": 'CIN',
 "Cleveland Indians": 'CLE',
 "Colorado Rockies": 'COL',
 "Detroit Tigers": 'DET',
 "Houston Astros": 'HOU',
 "Kansas City Royals": 'KCR',
 "Los Angeles Angels": 'LAA',
 "Los Angeles Dodgers": 'LAD',
 "Miami Marlins": 'MIA',
 "Milwaukee Brewers": 'MIL',
 "Minnesota Twins": 'MIN',
 "New York Yankees": 'NYY',
 "New York Mets": 'NYM',
 "Oakland Athletics": 'OAK',
 "Philadelphia Phillies": 'PHI',
 "Pittsburgh Pirates": 'PIT',
 "San Diego Padres": 'SDP',
 "San Francisco Giants": 'SFG',
 "Seattle Mariners": 'SEA',
 "St. Louis Cardinals": 'STL',
 "Tampa Bay Rays": 'TBR',
 "Texas Rangers": 'TEX',
 "Toronto Blue Jays": 'TOR',
 "Washington Nationals": 'WSN',
  
}

const posMap = {}
        
const teamPage = (team) => {
    const brefTeam = teamsNamesObjects[team]
    findTeamPlayers(brefTeam)
    
}      
       
      
const findTeamPlayers = (brefTeam) => {
    const team = playersArray.filter(players => players.Team === brefTeam)
    console.log(team)
    removeChartFn();
    removeTable();
    infoContainer
    .style('display', 'none')
    createPlayerIndexArrays(team)
}

const createPlayerIndexArrays = (team) =>{
    const teamPlayersArr = [];
    let playersArr = [];
    team.forEach( player => {
        
        // const statKeys = ["Name", "Age","Raw Games","PA","AB","Raw Runs Scored","Raw Hits","2B","3B","Raw HR","Raw RBI","SB","CS","BB","SO","Raw BA","Raw OBP","Raw SLG","Raw OPS","Raw OPS+","TB","GDP","HBP","SH","SF","IBB","Pos Summary"]
        const infoKeys = ["Name", "Age", "Pos Summary", "Team"]
            for (const key in player){
                if (infoKeys.includes(key)){
                    playersArr.push({
                        key:key,
                        value: player[key]
                    })
                }
            }
            teamPlayersArr.push(playersArr)
            playersArr = []
    })
    console.log("teamPlayersArr")
    console.log(teamPlayersArr)
    render(teamPlayersArr)
}

const render = (teamPlayersArr) => {
    playerDiv.style('display', 'block')

           const ul = playerDiv.selectAll('ul').data(teamPlayersArr)
            ul
            .enter().append('ul').merge(ul)
            .attr('class', 'player-ul')
            .style('display', 'block')
            .on('click', function(d){
                debugger
                const playerName = this.__data__[0].value
                const player = playersArray.find(player => player.Name === playerName)
                console.log(playerName)
                inputName(playerName)
                yearSelecterFn(year, player)
                playerParagraph.textContent = player.Name
            teamParagraph.textContent = player.Team
            seasonParagraph.textContent = year
            ul.style('display', 'none')
            })
           
            const li = ul.selectAll('li').data(function(d){
                
              return  d
            })
            li.enter().append('li').merge(li)
            .attr('class', 'player-info-li')
            .attr('value', d => d[0])
            .text( d => `${d.key}: ${d.value}`)
          
            ul.exit().remove()
            li.exit().remove()
        // const playersUl = d3.selectAll('.player-ul')
        // playersUl.merge(playersUl).transition().duration(1000)
        // playersUl.exit().remove()
}
    // mainContainer
    //     .append('div')
    //     .attr('class', 'team-players-div')
    //         .selectAll('ul').data(teams)
    //         .enter().append('ul')
           
    //         .attr('class', 'player-ul')
    //         .selectAll('li').data(function(d){
    //             debugger
    //             d
    //         })
    //         .enter().append('li')
    //         .text( d => d)
            

      