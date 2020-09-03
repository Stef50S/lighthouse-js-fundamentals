const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let resultingStations = []; // Store eligible stations
  for (let station of stations) { 
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) { // Each station is an array, so each detail can be indexed
      resultingStations.push(station[0]); // Only include the station's name in the result
    }
  }
  return resultingStations;
}

console.log(chooseStations(stations));