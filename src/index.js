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
    if (expr == undefined || expr == null || expr == "") return ""

    return expr.split("**********").map(encodedWord => {
        let word = ""

        while (encodedWord.length > 0) {
            let encodedNumbersChar = Number.parseInt(encodedWord.slice(0, 10)).toString()

            let morzeEncodedChar = "";
            while (encodedNumbersChar.length > 0) {
                morzeEncodedChar += encodedNumbersChar.slice(0, 2) == "10" ? "." : "-"
                encodedNumbersChar = encodedNumbersChar.substring(2)
            }
            word += MORSE_TABLE[morzeEncodedChar]
            encodedWord = encodedWord.substring(10)
        }

        return word
    }).join(" ")
}

module.exports = {
    decode
}