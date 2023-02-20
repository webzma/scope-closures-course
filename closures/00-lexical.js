const global = 'A';

function myFunction() {
  const number = 1;
  console.log(number, global);

  function anotherF1() {
    const number2 = 2;
    console.log(number2);

    function anotherF2() {
      const number3 = 3;
      console.log(number3);
    }

    return anotherF2();
  }

  return anotherF1();
}

myFunction();

function sumWithClosure(firstNum = 0) {
  // Tu código aquí 👈
  return function (secondNum = 0) {
    return function(thirdNum = 0) {
      return firstNum + secondNum + thirdNum; 
    }
  }
}
console.log(sumWithClosure(2)(3)(4));
