function myPets() {
  let pets = [];

  function pushPet(pet) {
    if (pet) {
      pets.push(pet)
      return pets;
    } else return pets;
  }

  return pushPet;
}

const anotherFunction = myPets();
anotherFunction('Lazaro');
anotherFunction('Torito');
anotherFunction('Tesla');
anotherFunction('Michu');
console.log(anotherFunction());

