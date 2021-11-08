function stringObj() {
  let test = "kshdkjfhksdhfkj";
  let ans = ''
  for (let i = 0; i < test.length; i++) {
    test[i] = 'a';
    ans += 'a';
  }
  return ans;
}

console.log(stringObj());