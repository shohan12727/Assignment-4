// function cashOut (money){
//     const value = money;
//     const cashOutCharge = money*1.75/100 ;
//     const realAmmount = value + cashOutCharge ;
//     return realAmmount ;
// }

// const enterValue = cashOut (8252);
// console.log (enterValue);
console.log("_____________");

function checkForSpace(input) {
    if (input.trim() === '') {
      return 'Invalid';
    }
    return 'Valid';
  }
  
  // Example usage
  console.log(checkForSpace(" ")); // Output: Invalid  
  console.log(checkForSpace("Hello")); // Output: Valid


  