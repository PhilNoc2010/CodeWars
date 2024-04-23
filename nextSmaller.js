// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 when there is no smaller number that contains the same digits. Also return -1 when the next smaller
//   number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.

function nextSmaller(n) {
    // start by casting the incoming value to a string, as we will work with permutations to solve this algo
    s = n.toString();
    // iterate through the string until we find the solution
    for (let i = s.length - 2 ; i >= 0 ; i--) {
        pairToRev = s.slice(i-1, i+1)
        nextNum = s.slice(0,i-1) + pairToRev.split('').reverse().join('') + s.slice(i+1)
        if (nextNum < n) {
            return parseInt(nextNum)
        }
    }

    return -1
}

console.log(nextSmaller(21))
console.log(nextSmaller(213))
console.log(nextSmaller(2135))
console.log(nextSmaller(21358))
console.log(nextSmaller(32185))