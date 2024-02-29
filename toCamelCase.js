function toCamelCase(str){
  if (str === "") {return ""}

  string = str.replaceAll("-","_")

  if(string.includes("_")){
    words = string.split("_")
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

console.log(toCamelCase("Justin-what_are-you-doing"))