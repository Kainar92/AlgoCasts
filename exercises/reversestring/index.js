// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.reduce((rev, char) => char + rev, '').split('');
}

console.log(reverse(['h', 'e', 'l', 'l','o']))

module.exports = reverse;

// #1
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// #2
// function reverse(str) {
//     let reversed = '';
//     for(let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }


// #3
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }
