function tipCalc(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (50 <= bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

const bills = [140, 45, 270];

const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

console.log(`the tips are ${tips}`);

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(`The totals are ${totals}`);

function bigEnough(totals){
    return totals > 100;
}

const copy = totals.filter(bigEnough);
console.log(`The totals over $100 are ${copy}`);
