function evenOrOdd(number) {
    // if (Math.abs(number) % 2 === 1){
    //   return "Odd"
    // } else{
    //   return "Even"
    // }
    return Math.abs(number) % 2 === 1 ? "Odd" : "Even"
}


console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))
