'use strict';

const fs = require('fs');

const element_data = fs.readFileSync('elements.json');
const elements = JSON.parse(element_data);

const [word_input] = process.argv.slice(2);
console.log('word_input: ', word_input);

if (word_input == null || word_input.length == 0) {
  console.error("No input provided");
}

const options = [];

recursive_tree(word_input, []);

function recursive_tree(word, output) {
  if (!word.length) { // we have reached the end
    return options.push({
      score: score(output),
      entries: output
    })
  }

  const space_left = Math.min(2, word.length)

  for(let i = 1; i <= space_left; i++) {
    const [entry, remainder] = [word.slice(0, i), word.slice(i)]
    recursive_tree(remainder, [...output, {
      symbol: entry,
      element: {
        ...elements[entry.toUpperCase()]
      }
    }]);
  }
}

function score(output) {
  let score = output.filter(entry => entry.element.name).length / word_input.length;
 return Math.round(score * 100)
}

options.sort((a, b) => {
  return a.score < b.score
});

const match = options.find((option) => option.score === 100);
if(match) {
  console.log("💥💥💥💥💥💥💥💥💥💥💥💥💥")
}


console.dir(options, { depth: null })