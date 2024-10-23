const palindromes = function (str) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = str
    .toLowerCase()
    .split('')
    .filter(char => alphanumerical.includes(char))
    .join('')

    const reversedString = cleanedString.split('').reverse().join('')

    return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
