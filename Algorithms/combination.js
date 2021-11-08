const combination = function (elements) {
  if (elements.length === 0) return [[]];
  let firstEl = elements[0];
  let restEl = elements.slice(1);
  const combsWithoutFirst = combination(restEl);
  const combsWithFirst = [];
  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  });
  return [...combsWithoutFirst, ...combsWithFirst];
}

console.log(combination(['a', 'b', 'c']));