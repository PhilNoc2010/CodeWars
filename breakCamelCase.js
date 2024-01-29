// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    if (string == "") {
        return "";
    }

    let answer = ""
    answer = answer + string[0]

    for (var i = 1; i < string.length; i++){
        if (string[i] == string[i].toUpperCase()){
            answer = answer + " " + string[i]
        } else {
            answer = answer + string[i]
        }
    }

    return answer
  }

  console.log(solution("camelCasing"))
  console.log(solution("identifier"))
  console.log(solution(""))
  console.log(solution("theRainInSpain"))