// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
    //  console.info(Math.log2(1024));
      // Code here
      const numArr = []
      for(let i = 1; i <= power; i++){
        numArr.push(number)
      }
      
      let result = numArr.reduce((acc,cur) => acc * cur,1)
      return result
    }


    function numberToPower(number, power){
      var total = 1;
      for (var i = 1; i <= power; i++) { 
        total = total * number;
      }
      return total;
    }