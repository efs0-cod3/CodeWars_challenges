function removeRotten(bagOfFruits) {
  if (bagOfFruits == null) return [];
  return bagOfFruits.map((fruit) =>
    fruit.startsWith("rotten")
      ? fruit.replace("rotten", "").toLowerCase()
      : fruit.toLowerCase()
  );
}

function removeRottenMap(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}


function removeRottenMapp(bagOfFruits){
    return bagOfFruits?.map(el => el.toLowerCase().replace('rotten','')) || []
  }