function order(words) {
    return words ? words.split(' ')
        .sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ') : '';
}
console.log(order("is2 Thi1s T4est 3a"));



function order(words) {
    // ...
    return words.split(' ').sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
order("is2 Thi1s T4est 3a")