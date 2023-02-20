var a; // declarando
var b = 'b'; // declarando y asignamos
b = 'bb'; // reasignamos
var a = 'a'; // redeclaramos

// Scope Global 
var fruit = 'Apple';
console.log(fruit);

function main() {
  console.log(fruit);
}

main();