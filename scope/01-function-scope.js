function greeting() {
  //function scope
  var name = 'Wilberk';
  
  if (name === 'Wilberk') {
    console.log('Hello ' + name + '!');
  }
}

greeting();
//output: 'Hello Wilberk!'