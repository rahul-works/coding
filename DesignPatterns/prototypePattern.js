const macbook = {
  color: 'silver',
  turnOn() {
    console.log('turning on...');
  },
  turnOff() {
    console.log('turning off...');
  }
}

const myComputer = Object.create(macbook, {owner : {value:"tim"}});
console.log(myComputer.__proto__  === macbook);

const newComputer = {...macbook, owner: "John"};
console.log(newComputer.__proto__  === macbook);

macbook.power = 'USB-C';

console.log(myComputer.power);
console.log(newComputer.power);