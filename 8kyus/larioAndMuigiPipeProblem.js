function pipeFix(numbers) {
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    const newArr = []
    for (let i = min; i <= max; i++) {
        newArr.push(i)
    }
    return newArr
}