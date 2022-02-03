const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];

    let str = '';
  
    let resStr = '';
    
    let count = 0;

    const symb = "**********"
    
    for (let i = 0; i <= expr.length;i++) {
      arr.push(expr[i]);
      count++;
      if (count !== 0 && count % 10 === 0) {
        str = String(arr);
        str = str.replace(/,/g,'').replace(/10/g,'.').replace(/11/g,'-').replace(/0/g,'').replace(`${symb}`,' ');
          for (let key in MORSE_TABLE) {
            if (key === str) {
              resStr = resStr + MORSE_TABLE[key];
              arr = [];
              str = '';
              break
            }
          }
         resStr = resStr + str;
         arr = [];
         str = ''
      }
    }
  
   return (resStr);
}

module.exports = {
    decode
}