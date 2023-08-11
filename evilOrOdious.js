function evil(n) {
    let its = n.toString(2).split('').filter(el => el ==1)
    return its.length % 2 === 0 
    ? "It's Evil!" 
    : "It's Odious!"
}