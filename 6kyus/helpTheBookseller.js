
// not finished


function stockList(listOfArt, listOfCat){
    // ... 
    let c = []
     let c2 = []
      for(let i=0;i < listOfArt.length;i++){
     c.push(listOfArt[i].split(' '))
    }
    for(let i=0;i < c.length;i++){
     c2.push([c[i][0][0],Number(c[i][1])])
    }
  let join = c2.map(([key,value]) => {
  return {[key]:value}
  })
  let final = []
  for (let i = 0;i < listOfCat.length;i++){
   
  }
    return final
  
      
  }
  stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B", "C", "D"])