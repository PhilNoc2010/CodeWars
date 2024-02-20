// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
// can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
    // start by using the helper function to make frequency tables for each incoming string
    const str1Map = makeFreqTable(str1)
    const str2Map = makeFreqTable(str2)
    // iterate through str2Map and ensure that each value occurs
    for (const [letter, value] of Object.entries(str2Map)){
        if (value > str1Map[letter] || str1Map[letter] == undefined) {
            return false
        }
    }
    return true;
  }

  function makeFreqTable(string) {
    const map = {};
    for (let i = 0; i < string.length; i++) {
        map[string[i]] = (map[string[i]] || 0) + 1
    }
    return map;
  }

// console.log(scramble('rkqodlw', 'world'))
// console.log(scramble('cedewaraaossoqqyt', 'codewars'))
// console.log(scramble('katas', 'steak'))
// console.log(scramble('scriptjavx','javascript'))  //<<--

  console.log(scramble('scriptingjava','javascript'))
  console.log(scramble('scriptsjava','javascripts'))
  console.log(scramble('javscripts','javascript'))  //<<--
  console.log(scramble('jscripts','javascript'))
  console.log(scramble('aabbcamaomsccdd','commas'))
  console.log(scramble('commas','commas'))
  console.log(scramble('sammoc','commas'))