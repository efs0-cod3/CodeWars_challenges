// first solution
function plural(n) {
    // ...
    return n >= 0 && n < 1 ? true : n > 1 ? true : false
}

// better one
function plural(n) {
    // ...
    return n != 1 
}
