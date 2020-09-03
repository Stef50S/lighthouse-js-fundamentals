const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; // Parade movement

const finalPosition = function (moves) { // Calculate final position of parade
  let x = 0; // Coordinates for parade, (0,0) starting position 
  let y = 0;
  let endPosition = []; // Store final coordinates here

  for(let direction of moves) {
    switch (direction) {
    case 'north': // Move up
      y += 1;
      break;
    case 'south': // Move down
      y -= 1;
      break;
    case 'east': // Move left
      x += 1;
      break;
    case 'west': // Move right
      x -= 1;
      break;
    }
  }

  endPosition.push(x); // Get final coordinates
  endPosition.push(y);

  return endPosition;
}

console.log(finalPosition(moves));