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
    letters = str2.split('')
    for (i = 0; i < letters.length; i++){
        let idx = str1.indexOf(letters[i])
        if (idx === -1) {
            return false
        } else {
            // remove the located character from str1 in order to prevent issues when characters appear multiple times
            str1 = str1.slice(0,idx) + str1.slice(idx+1)
        }
    }
    return true;
  }

  console.log(scramble('rkqodlw', 'world'))
  console.log(scramble('cedewaraaossoqqyt', 'codewars'))
  console.log(scramble('katas', 'steak'))
  console.log(scramble('scriptjavx','javascript'))  //<<--

  console.log(scramble('scriptingjava','javascript'))
  console.log(scramble('scriptsjava','javascripts'))
  console.log(scramble('javscripts','javascript'))  //<<--
  console.log(scramble('jscripts','javascript'))
  console.log(scramble('aabbcamaomsccdd','commas'))
  console.log(scramble('commas','commas'))
  console.log(scramble('sammoc','commas'))