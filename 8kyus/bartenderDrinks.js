// function getDrinkByProfession(param){
//     let answer = ''
//     switch(param.toLowerCase()){
//         case "jabroni":
//           answer = "Patron Tequila";
//         break
//         case "school counselor":
//         answer = "Anything with Alcohol"
//         break
//         case "programmer":
//           answer = "Hipster Craft Beer";
//         break
//         case "bike gang member":
//         answer = "Moonshine";
//         break
//         case "politician":
//           answer = "Your tax dollars";
//         break
//         case "rapper":
//         answer = "Cristal";
//         break
//         default:
//           answer = "Beer";
//     }
//     return answer
//   }
// console.log(getDrinkByProfession("jabrOni"));

function getDrinkByProfession(profession){
  
  const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }

  return drinks[profession.toLowerCase()] || "Beer"
}
  console.log(getDrinkByProfession("jabrOni"));
