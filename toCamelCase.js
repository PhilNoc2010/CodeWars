function toCamelCase(str){

  var words = str.split(" ")

  // if (words.length = 0){
  //   words = str.split("-")
  // }

  outStr = words[0]

  for (var i=1;i<words.length;i++){
    var temp = words[i].substr(0,1)
    temp = temp.toUpperCase()
    temp = temp +  words[i].slice(1)
    console.log(temp)
    outStr = outStr + temp
  }

  console.log(outStr)
  return outStr
}

toCamelCase("Justin what are you doing")