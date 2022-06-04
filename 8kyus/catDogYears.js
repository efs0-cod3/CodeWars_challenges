var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let firstYear= 15
    let secondYear = 15 + 9
    let othersYearsCat = secondYear + ((humanYears - 2)* 4)
    let othersYearsDog = secondYear + ((humanYears - 2)* 5)
    
    if(humanYears == 1){
      return [humanYears,firstYear,firstYear]
    }else  if(humanYears == 2){
      return [humanYears,secondYear,secondYear]
    }else{
      return [humanYears,othersYearsCat,othersYearsDog]
    }
    }