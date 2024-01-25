// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing
// second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let output = []
   let i = 0
   while (str[i] != null) {
        let pair = ""
        str[i+1] === undefined ?  pair = str[i] + "_" :  pair = str[i] + str[i+1]
        output.push(pair)
        i = i + 2
   }
   return output
}

console.log(solution("abc"))
console.log(solution("abcdef"))
console.log(solution("BostonCeltics"))