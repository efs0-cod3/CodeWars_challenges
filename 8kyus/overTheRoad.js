// primera solucion
function overTheRoad(address, n) {
    let houses = n * 2;
    return address == 1 
    ? houses 
    : address == n 
    ? n + 1 
    : houses - address + 1;
  }

// refactorizada
function overTheRoad(address, n) {
  //sacar el maximo de casas mas 1 ya que el maximo
  // de casas es 6 y si restamos 6 queda 0
  // por eso agregamos 1 a la suma maxima de
  // la casa que seria el valor minimo y quede 1
  //(que seria el opuesto) al buscar la direccion 6
  let MaxHousesPlusMinVal = n * 2 + 1;
  return MaxHousesPlusMinVal - address;
}
console.log(overTheRoad(20, 1000000));
