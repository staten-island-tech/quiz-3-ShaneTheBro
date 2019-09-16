/* const bills = [140, 45, 270];

function tipCalc(bills){
    if (bills < 50){
        return .2
    }
    if (50 < bills < 200){
        return .15
    }
    if (bills > 200){
        return .1
    }
    }
    let tips = [tipCalc(bills[0]) * bills[0], tipCalc(bills[1]) * bills[1], tipCalc(bills[2]) * bills[2]]
    console.log(tips) */

/* const tips = ['.2 * 140', '.2 * 45', '.2 * 270'];
const total = [tips[0] + 140, tips[1] + 45, tips[2] + 270];
 */

 function tipCalc(bill){
     let percentage; 
     if (bill < 50) {
         percentage = .2;
     } else if (50 <= bill < 200){
         percentage = .15;
     } else {
         percentage = .1;
     }
     return percentage * bill;
 }

 const bills = [140, 45, 270];

 const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

console.log(tips);

const 
