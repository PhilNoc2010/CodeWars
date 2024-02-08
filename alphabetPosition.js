// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// alphabetPosition("The sunset sets at twelve o' clock.")

// ASCII codes for Upper Case letters are 65 => 90
// ASCII codes for lower case letters are 97 => 122

function alphabetPosition(text) {
    let answer = ""
    for (let i = 0; i < text.length; i++)
    {
        //convert the character to lower case to faciliate examination
        let char = ""
        char = text[i].toLowerCase()
        let charCode = char.charCodeAt()
        if (charCode > 96 && charCode < 123) {
            answer = answer + (charCode - 96) + " "
        }
    }
    return answer.trim();
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  console.log(alphabetPosition("When stuck, ask yourself:  What Would Bugs Bunny Do?"))