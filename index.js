// Something I was trying out
/*function hasTargetSum(array, target) {
  for (let i = 0; i <= array.length; i++) {
    let remainderValue = target - array[i]
    console.log(remainderValue);
    if (remainderValue === array[i]) {
      i ++
    } 
    if (remainderValue === )
  }
  return false;
}*/









function hasTargetSum(array, target) {
  for (let i = 0; i <= array.length; i ++) {
    for (let j = i + 1; j <= array.length; j ++){
      if (array[i] + array[j] === target) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  write a function that runs through an input array of numbers and compares each number to see if any combination of two numbers adds up to the given target number. It will return true if the target number is reached and false if not.
  apperantly should not be able to add against self

  loop through array
   take index 0 add to index 0, 1, 2, 3, etc untill reaching the end of the array
   if any additions equal the givern target number exit loop and return true
   if not take index 1 and repeat process stated above untill end of array
   if end of array is reached and no numbers equal the target number then return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 2));

  console.log("");
 
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
