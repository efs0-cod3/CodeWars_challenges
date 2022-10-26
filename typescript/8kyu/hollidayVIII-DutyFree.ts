export function dutyFree(normPrice: number, discount: number, hol: number): number{
    //  get the discount price 
      let discountPrice: number =  normPrice * (discount/100)
      return Math.floor(hol / discountPrice)
    }
    dutyFree(50,25, 1000)