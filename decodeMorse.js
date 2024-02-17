// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

function decodeMorse(morseCode){
    const morseRef = {
        '.-':     'A',
        '-...':   'B',
        '-.-.':   'C',
        '-..':    'D',
        '.':      'E',
        '..-.':   'F',
        '--.':    'G',
        '....':   'H',
        '..':     'I',
        '.---':   'J',
        '-.-':    'K',
        '.-..':   'L',
        '--':     'M',
        '-.':     'N',
        '---':    'O',
        '.--.':   'P',
        '--.-':   'Q',
        '.-.':    'R',
        '...':    'S',
        '-':      'T',
        '..-':    'U',
        '...-':   'V',
        '.--':    'W',
        '-..-':   'X',
        '-.--':   'Y',
        '--..':   'Z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
        '...---...':  'SOS',
        '-.-.--':     '!',
        '.-.-.-':     '.',
      };

    // A triple space is used to split up words in a Morse Code message
    let message = ""
    let morseWords = morseCode.trim().split("   ")

    for (i = 0; i < morseWords.length; i++){
        // a single space is used in between letters in a morse code message
        let morseLetters = morseWords[i].split(" ")
        for (j = 0; j < morseLetters.length ; j++) {
          message += morseRef[morseLetters[j]]
        }
        message += " "
    }
    return message.trim()
  }

  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))

  console.log(decodeMorse('...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '))