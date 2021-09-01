class person {
  constructor (name, age, mother) {
    this.name = name;
    this.age = age;
    this.mother = mother;
  }
}

const tim = new person('Tim', 31, null);
const tina = new person('Tina', 57, null);

tim.mother = tina;

console.log(tim);

const grandma = new person('Sherry', 80, null);
tina.mother = grandma;

console.log(tim);