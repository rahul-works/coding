const array = [
  {x: "foo", y :9},
  {x: "bar", y :2},
  {x: "baz", y :4}
];

const foo = array.reduce(
  (a, b) => ({
    ...a,
    [b.x]:b.y,
  }),
  {}
);

console.log(foo);

const array1 = [{name: "foo"}, {name: "bar"}, {name: "baz"}];

const array3 = array1.map((obj, idx) => ({
  ...obj,
  position: idx,
}));
console.log(array3);
const array4 = array1.slice();
console.log(array4);
array4.forEach((obj, idx) => {
  obj.position = idx;
});

const array2 = new Array(array1.length).fill({});
array2.forEach((obj, idx) => {
  obj.name = array1[idx].name,
  obj.position = idx
});
console.log(array2);
console.log(array4);
console.log(array1);