function greeating() {
  let username = 'webzma';

  function displayUsername() {
    return `Hello ${username}`
  }

  return displayUsername();
}

const g = greeating;

console.log(g);
console.log(g());