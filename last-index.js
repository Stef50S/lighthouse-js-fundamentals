function lastIndexOf(array, value) {
  let index; // Store final index

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) { // Check if value exists in array
      index = i; // If it exists, save the current index
    }
  }

  if (index === undefined) { // If value does not exist in array
    return -1;
  } else {
    return index;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);