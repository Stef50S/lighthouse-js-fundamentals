function howManyHundreds (number) { // number = number of bottles
  let numContainers = 0; // Number of containers to send
  
  if (number === 0) { // Avoid dividing by 0
    return numContainers; // 0 bottles = 0 conatiners
  } else {
    let remainder = number % 100; // Containers hold 100 bottles
    numContainers = (number - remainder) / 100; // Perform integer division
    return numContainers;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);