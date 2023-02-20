function myMoneyBox() {
  let myCoins = 0;

  function sumCoins(coins) {
    myCoins += coins;
    console.log(myCoins);
  }

  return sumCoins;
}

const result = myMoneyBox();
result(5);
result(10);
console.log(result);



