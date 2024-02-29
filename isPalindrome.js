// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    xStr = x.toString()
    for (i = 0; i < xStr.length/2; i++){
        if (xStr[i] !== xStr[(xStr.length-i-1)]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(121))
// console.log(isPalindrome(1111))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))

// console.log(isPalindrome(1000021))

