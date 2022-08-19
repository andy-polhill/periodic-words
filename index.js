'use strict';

const fs = require('fs');

let element_data = fs.readFileSync('elements.json');
let elements = JSON.parse(element_data);

const [word] = process.argv.slice(2);
console.log('word: ', word);

// const output = []
// const letters = word.split('')
// console.log(letters)
// recursive(output, letters)

const options = [];
recur(word, 0, "");

// Function to break a string into all possible combinations of
// non-overlapping substrings enclosed within parenthesis

function recur(input, index, output) {

  console.log(input, index, output)

  if (input == null || input.length == 0) {
    console.error("No input provided");
  }

  console.log(`${index} == ${input.length}`);
  if (index == input.length) {
    console.log('=== done ===')
    options.push({ entry: output })
  }

  // consider each substring S[i, j]
  for (let j = input.length - 1; j >= index; j--) {
    let entry = input.substring(index, j + 1);

    // append the substring to the result and recur with an index of
    // the next character to be processed and the result string
    recur(input, j + 1, [...output, entry]);
  }
}

console.log(options)


// function recursive(output, letters) {
//   let go = false
//   if(elements[letters[0]]) {
//     console.log("match");
//     output.push(elements[letters[0]]);
//     letters = letters.filter(l => l !== letters[0])
//     go = true
//   } else if(elements[`${letters[0]}${letters[1]}`]) {
//     console.log("match first 2");
//     go = true
//   }

//   if(go) {
//     console.log(letters)
//     console.log(output)
//     recursive(output, letters)
//   } else {
//     console.log('no work')
//   }
// }