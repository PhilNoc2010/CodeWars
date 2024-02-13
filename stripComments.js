// Complete the solution so that it strips all text that follows any of a
// set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
    // if no markers are passed in, we will do an early exit
    if (markers.length === 0) {return text.trimEnd()}

    let comments = text.split("\n")

    for (let i = 0; i < comments.length; i++){
        for (let j = 0; j < markers.length; j++) {
            if (comments[i].includes(markers[j])) {
                comments[i] = comments[i].substring(0, comments[i].indexOf(markers[j]))
            }
            comments[i] = comments[i].trimEnd()
        }
    }
    comments = comments.join("\n")
    return comments
  }

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [])

var result = solution(" #\nG^*gb%FkZED/@ Fg\n", ["-"])

console.log(result)
