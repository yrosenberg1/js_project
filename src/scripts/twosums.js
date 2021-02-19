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
      
      
          
      
  
  
  twoSum([2,7,11,15],9)