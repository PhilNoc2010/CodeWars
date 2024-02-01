// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 1
//   "    ***    ", 2
//   "   *****   ", 3
//   "  *******  ", 4
//   " ********* ", 5
//   "***********"  6
// ]

function towerBuilder(nFloors) {
    let block = "*"
    let tower = []
    if (nFloors < 0) {return "Use the buildBunker function to build into the ground"}
    if (nFloors === 0) { return tower }

    for (i = 0; i < nFloors; i++){
        let floorWidth = " ".repeat(nFloors - i - 1)

        tower.push(floorWidth + block.repeat((2 * i) + 1) + floorWidth)
    }
    return tower
}

console.log(towerBuilder(-4))
console.log(towerBuilder(0))
console.log(towerBuilder(1))
console.log(towerBuilder(3))
console.log(towerBuilder(7))
console.log(towerBuilder(11))