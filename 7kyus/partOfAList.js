function partlist(arr) {
  // your code
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(result.length, i, i + 1);
    result.length === 0
      ? result.push([
          arr.slice(0, i + 1).join(" "),
          arr.slice(1 - arr.length).join(" "),
        ])
      : result.push([
          arr.slice(0, i + 1).join(" "),
          arr.slice(i + 1 - arr.length).join(" "),
        ]);
  }
  return result;
}

function partlist2(arr) {
  // your code
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push([
      arr.slice(0, i).join(" "),
      arr.slice(i - arr.length).join(" "),
    ]);
  }
  return result;
}
console.log(partlist2(["I", "wish", "I", "hadn't", "come"]));

function partlistMap(arr) {
    return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}
console.log(partlistMap(["I", "wish", "I", "hadn't", "come"]));


// [ [ 'I', 'wish I hadn\'t come' ], [ 'I wish', 'I hadn\'t come' ], [ 'I wish', 'I hadn\'t come' ], [ 'I wish I', 'hadn\'t come' ], [ 'I wish I hadn\'t', 'come' ] ]
// [ [ 'I', 'wish I hadn\'t come' ], [ 'I wish', 'I hadn\'t come' ], [ 'I wish I', 'hadn\'t come' ], [ 'I wish I hadn\'t', 'come' ] ]

