function calcTime(total, current, sword) {
  const restartTime = total+current;
  let backtrackTime = current-1;
  backtrackTime += sword+1;
  backtrackTime += (total-sword)+1;
  if (backtrackTime<restartTime) return backtrackTime;
  return restartTime;
}
console.log(calcTime(10, 5, 2));
