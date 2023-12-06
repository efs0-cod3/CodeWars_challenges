class Ghost {
  constructor() {
    // your code goes here
    let color = ["white", "yellow", "purple", "red"];
    this.color = color[Math.floor(Math.random() * 4)];
}
}

// var Ghost = function() {
//     // your code goes here
//     let color = ["white","yellow","purple","red"]
//     this.color = color[Math.floor(Math.random() * 4)];
//   };

let ghost = new Ghost();
console.log(ghost.color);
