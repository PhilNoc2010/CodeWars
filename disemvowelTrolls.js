function disemvowel(str) {
    var output = ""

    output = str.replace(/a/g,"")
    output = output.replace(/e/g,"")
    output = output.replace(/i/g,"")
    output = output.replace(/o/g,"")
    output = output.replace(/u/g,"")
    output = output.replace(/A/g,"")
    output = output.replace(/E/g,"")
    output = output.replace(/I/g,"")
    output = output.replace(/O/g,"")
    output = output.replace(/U/g,"")


    return output
}

  console.log(disemvowel("I Wanna Be Sedated"))