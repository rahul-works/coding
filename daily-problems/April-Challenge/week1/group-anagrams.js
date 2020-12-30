var groupAnagrams = function(strs) {
  if (strs === undefined || strs.length === 0) {
    return groupAnagrams;
  }
  let groupAnagrams = [];
  let mapGroupAnagrams = [];
  for (let word of strs) {
    const sortWord = word.split('').sort().join('');
    if (mapGroupAnagrams[sortWord] === undefined) {
      mapGroupAnagrams[sortWord] = [];
      mapGroupAnagrams[sortWord].push(word);
    } else {
      mapGroupAnagrams[sortWord].push(word);
    }
  }
  for (let key in mapGroupAnagrams) {
    groupAnagrams.push(mapGroupAnagrams[key].sort()); 
  }
  console.log(groupAnagrams);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]