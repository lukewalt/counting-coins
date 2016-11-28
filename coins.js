/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter(num) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: null,
    dimes: null,
    nickels: null,
    pennies: null
  };

  var am = num * 100;
  coinPurse.quarters += parseInt(am/25);
  am -= coinPurse.quarters * 25;

  coinPurse.dimes += parseInt(am/10);
  am -= coinPurse.dimes * 10;

  coinPurse.nickels += parseInt(am/5);
  am -= coinPurse.nickels * 05;

  coinPurse.pennies += parseInt(am);
  return coinPurse;

}

var coins = coinCounter(.89);
console.log(coins);
