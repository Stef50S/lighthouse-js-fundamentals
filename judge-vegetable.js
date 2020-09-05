const judgeVegetable = function (vegetables, metric) {
  let maxRanking = 0; // Store the highest ranking in a given category
  let name = ''; // Store name of submitter with the highest ranking

  for (let submission of vegetables) {
    if (submission[metric] >= maxRanking) { // If metric surpasses maximum, save the ranking and name
      maxRanking = submission[metric];
      name = submission.submitter;
    }
  }

  return name;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));