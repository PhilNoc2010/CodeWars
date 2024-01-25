function basicOp(operation, value1, value2)
{
  var result = 0
  switch (operation){
      case '+' :
        result = value1 + value2
        break
      case '-' :
        result = value1 - value2
        break
      case '*' :
        result = value1 * value2
        break
      case '/' :
        result = value1 / value2
        break
      default :
        result = "Invalid Operation"
  }
  return result
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))