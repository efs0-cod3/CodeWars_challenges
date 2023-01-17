function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }
  console.log(animal({name:'dog', legs:4, color:'white'}));