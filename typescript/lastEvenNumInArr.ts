export function lastEvenNumbers(arr: number[], n: number): number[] {

    return arr.filter(n => {
        return n % 2 === 0
    })
    .slice(-n)

}
console.log(lastEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))