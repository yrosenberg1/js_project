var twoSum = function(nums, target) {

    
    let numsHash = {}
      
    let solutionArray = [];
     for (let index = 0; index < nums.length; index++){
          const number = nums[index]
          numsHash[number] = index
     }
    
     for (let index = 0; index < nums.length; index++){
         let pair =  target - nums[index]
         const number = nums[index]
         if (Object.keys(numsHash).includes(pair.toString())){
           return [numsHash.pair, numsHash.number]
         }
     }
      return solutionArray
  };
      
      teamNamesArray = 
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
          
      
  
  
  twoSum([2,7,11,15],9)