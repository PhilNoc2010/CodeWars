function toCamelCase(str){

  var separator = str.includes("_")

  if(separator == true){
    words = str.split("_")
  }
  else {
    words = str.split("-")
  }

  outStr = words[0]

  for (var i=1;i<words.length;i++){
    var temp = words[i].substr(0,1)
    temp = temp.toUpperCase()
    temp = temp +  words[i].slice(1)
    outStr = outStr + temp
  }

  return outStr
}

console.log(toCamelCase("Justin-what-are-you-doing"))