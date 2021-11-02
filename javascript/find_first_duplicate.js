
//i
  //array of numbers
//o
  //number that is the first duplicate
//e
//c
/*
  I am going to initiate an empty object and I am going iterate over the array and pass the count of the of each number if the first time a number is to be counted again return that number. If there are no duplicates return -1
*/
function findFirstDuplicate(arr) {
  //initate duplicates to be an empty object
  //iterate over arr
    //if the property that is the value of the array does exist
      //return the current number
    //else
      //add property to duplicates
  //return -1
  const duplicates = {}
  for (const num of arr) {
    if (duplicates[num]) {
      return num
    } else {
      duplicates[num] = 1
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
  findFirstDuplicates is taking in an array, initializes an empty object, then the function will iterate over the array checking to see if the property is in the empty object. IF the property is in the object the function will return the current value in the iteration otherwise if the property is not contained in the duplicates object then it will assing the value in the array as a property set to a value of one. If the array does not contain any duplicate value then the function will return negative one.
*/

// function equal(a, b) {
//   if (a === b) return console.log('Passed')
//   else return console.error(`Expected ${a === b} to be true ${a}`)
// }

// const a = findFirstDuplicate([1, 1, 2, 3, 4])
// equal(a, 1)
// const b = findFirstDuplicate([1, 2, 2, 3, 4])
// equal(b, 2)
// const c = findFirstDuplicate([1, 2, 3, 4])
// equal(c, -1)
// const d = findFirstDuplicate([1, 1, 2, 2, 3])
// equal(d, 1)