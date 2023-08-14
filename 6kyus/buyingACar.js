/**
 * The `nbMonths` function calculates the number of months it takes to save enough money to buy a new
 * item, taking into account the depreciation of the old item and the monthly savings.
 * @param startPriceOld - The starting price of the old car.
 * @param startPriceNew - The starting price of the new car.
 * @param savingperMonth - The amount of money saved per month.
 * @param percentLossByMonth - The percent loss in value of the old car and the new car per month.
 * @returns The function `nbMonths` returns an array containing two values: the number of months it
 * takes to save enough money to afford the new price, and the amount of money left over after
 * purchasing the new item.
 */
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  //your code here
  let month = 0,
    leftOver,
    result = [],
    totalSavings = 0;
  while (startPriceNew > startPriceOld + totalSavings) {
    if (month % 2) {
      percentLossByMonth += 0.5;
    }
    totalSavings += savingperMonth;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    month++;
  }

  leftOver = Math.round(startPriceOld + totalSavings - startPriceNew);
  result.push(month, leftOver);

  return result;
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
