const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
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
};

function decode(expr) {

    let arr = [];
    const praseArr = expr.split('**********')

    for (let i = 0; i < praseArr.length; i++) {

      let newWord = '';

      for(let j = 0; j < praseArr[i].length; j += 10){

        const word = praseArr[i].slice(j,j+10).replace(/^0+/g,''); 
        let newSing = '';  

        for (let j = 0; j < word.length; j += 2) {

          let sing = word.slice(j,j+2);
          sing = (sing === '10')? '.':'-';
          newSing += sing;
          
        }
        newWord += MORSE_TABLE[newSing];
      }
      arr.push(newWord);
    }
    return arr.join(' ');
}

module.exports = {
    decode
}
