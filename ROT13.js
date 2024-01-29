// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13
// letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with
// Rot13. If there are numbers or special characters included in the string, they should be returned as
// they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// example:
// "test" =>  "grfg"
// "Test" =>  "Grfg"

// ASCII codes for Upper Case letters are 65 => 90
// ASCII codes for lower case letters are 97 => 122

//

function rot13(message){
    let answer = ""

    for (let i = 0; i < message.length; i++){
        let charCode = message[i].charCodeAt()
        if ( ( charCode > 64 && charCode < 91) ) {
                // Upper Case Processing - start by adding 13 to the ASCII code
                charCode = charCode + 13
                // check to ensure we didn't exceed the bounds for upper case characters, and loop back if we did
                if (charCode > 90) {
                    charCode = 64 + (charCode - 90)
                }
            } else if ( charCode > 96 && charCode < 123 ) {
                // lower case processing
                charCode = charCode + 13
                // check to ensure we didn't exceed the bounds for lower case characters, and loop back if we did
                if (charCode > 122 ) {
                    charCode = 96 + (charCode - 122)
                }
            }
        answer = answer + String.fromCharCode(charCode)
        }

    return answer
    }

  console.log(rot13("test"))
  console.log(rot13("TEST"))

  console.log(rot13("Drink Your Ovaltine!"))

  console.log(rot13("Qevax Lbhe Binygvar!"))