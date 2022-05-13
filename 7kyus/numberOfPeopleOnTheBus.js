// my solution
var number = function(busStops){
    // Good Luck!
  const remainingPpl = busStops.map(arr =>{
      return arr[0]-arr[1]}).reduce((a,b) => a + b)
  
  return remainingPpl
  }
  number([[10,0],[3,5],[5,8]])

// other solution
  var number = function(busStops){
    var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
  }