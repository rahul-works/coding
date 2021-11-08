const permutations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);
  const permutationWithoutFirst = permutations(rest);
  const allPermutaions =[];
  permutationWithoutFirst.forEach( perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0,i), firstEl, ...perm.slice(i)];
      console.log(permWithFirst);
      allPermutaions.push(permWithFirst);
      console.log('----');
      console.log(allPermutaions);
    }
  });
  return allPermutaions;
};

console.log(permutations(['a', 'b', 'c']));