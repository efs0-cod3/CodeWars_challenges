function boredom(staff) {
  let count = 0;
  const values = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  const staffVal = Object.values(staff);

  staffVal.forEach((item) => (count += values[item]));
  return count >= 100
    ? "party time!!"
    : count > 80 && count < 100
    ? "i can handle this"
    : "kill me now";
}
console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }))