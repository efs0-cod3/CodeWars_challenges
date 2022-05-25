function expressionMatter(a, b, c) {
    let one = a + b * c, two = a * (b+c), three = a*b*c, four = (a+b)*c, five = a+b+c;
    return Math.max(one,two,three,four,five)
    }
    console.log(expressionMatter(1,2,3));