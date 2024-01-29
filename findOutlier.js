// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except
// for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
    //your code here
    let oddCount = 0
    let evenCount = 0
    // we know we will receive at least three values, so we will start by inspecting those
    Math.abs(integers[0]) % 2 === 1 ? oddCount++ : evenCount++
    Math.abs(integers[1]) % 2 === 1 ? oddCount++ : evenCount++
    Math.abs(integers[2]) % 2 === 1 ? oddCount++ : evenCount++

    // if our outlier is contained within the first three values, we will locate it and return it
    if (oddCount === 1 || evenCount === 1) {
        for (let i = 0; i < 3 ; i++) {
            if (Math.abs(integers[i]) % 2 === 1 && oddCount === 1) {
                return integers[i]
            }
            if (Math.abs(integers[i]) % 2 === 0 && evenCount === 1) {
                return integers[i]
            }
        }
    }

    // if oddcount OR evencount is set to three, we know what type of value we are looking for.
    // we will iterate through the rest of the array to find the outlier
    if (oddCount === 3 || evenCount === 3) {
        for (let j = 3; j < integers.length; j++) {
            if (Math.abs(integers[j]) % 2 === 1 && evenCount === 3) {
                // we've found the odd number outlier, so we will return it
                return integers[j]
            }
            if (Math.abs(integers[j]) % 2 === 0 && oddCount === 3) {
                // we've found the even number outlier, so we will return it
                return integers[j]
            }
        }
    }
  }

  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
  console.log(findOutlier([161, 93, 1719, 19, 789, 13, 621, 539, 180, 7893, 1, 99, 126795461]))