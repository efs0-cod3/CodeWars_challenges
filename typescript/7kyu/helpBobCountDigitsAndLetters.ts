export function countLettersAndDigits(input: string): number {
    let regex: RegExp = /[a-zA-Z\d]/g
      let regResult:any  = input.match(regex)
      return regResult === null ? 0: regResult.length
    }
    countLettersAndDigits("hel2!lo")