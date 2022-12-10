// functional 
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

//YOUR CODE HERE...
Ship.prototype.isWorthIt = function () {
  return this.draft - this.crew * 1.5 > 20 ? true : false;
};

//  Class oop
class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }
    //YOUR CODE HERE...
    isWorthIt() {
        return this.draft - this.crew * 1.5 > 20 ? true : false;
    }
}
  
