const form = document.getElementById("input_form");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert('HI');
  const string = new FormData(event.target).get("string");
  const options = start(string)
  console.log(options);
  output.innerHTML = JSON.stringify(options, null, 2)
});

function start(word_input) {
  const options = [];

  if (word_input == null || word_input.length == 0) {
    console.error("No input provided");
  }

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

  return options;
}