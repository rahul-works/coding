function createSchedule(initial, streetInfo, carRoute) {

}

function runSimulation(initial, streetInfo, carRoute) {
  $schedule = createSchedule(initial, streetInfo, carRoute);
}

function routing(oneCarRoute, streetInfo) {

}

const initial = [6, 4, 5, 2, 1000];

const streetInfo = [[2, 0, 'rue-de-londres', 1],
  [0, 1, 'rue-d-amsterdam', 1],
  [3, 1, 'rue-d-athenes', 1],
  [2, 3, 'rue-de-rome', 2],
  [1, 2, 'rue-de-moscou', 3]];

  // 1+3+2 = 1000
  // 3+1 = 2+1000
  /*best case :  red light, car before me 
  carRoute1 -> routing -> best-time 
  if best-time < simulation {
    // select car
  }


  make simulation file 

  output: intersection#, # of incoming street , [<street name, time>,    order] 

  3
  1 < # of intersection>
  2 
  athenes 2
  amsterdam 1
  0 < # of intersection>
  1
  londres 2
  2 < # of intersection>
  1
  moscou 1

  run simulation (simlation_file, carRoute)

  output:Score
  1000+2 = 1002
  */

const carRoute = [[4, 'rue-de-londres', 'rue-d-amsterdam', 'rue-de-moscou', 'rue-de-rome']
  [3, 'rue-d-athenes', 'rue-de-moscou', 'rue-de-londres']];
console.log(runSimulation(initial, streetInfo, carRoute));
