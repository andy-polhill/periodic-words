function parse(word_input) {
  let options = [];

  if(word_input == null || word_input.length == 0) {
    console.error("No input provided")
  }

  // Lets cap it at 100 chars, that recursion might get expensive
  word_input = word_input.substr(0, 100)

  recursive_tree(word_input, [])

  function recursive_tree(word, elements) {

    // if the result has fake (non matching) element of more than one symbol return
    if(elements.find(element =>
        !element.match && element.symbol.length > 1)) {
      return
    }

    if (!word.length) { // we have reached the end
      return options.push({
        score: score(elements),
        elements
      })
    }
  
    const space_left = Math.min(2, word.length)
  
    for(let i = 1; i <= space_left; i++) {
      const [entry, remainder] = [word.slice(0, i), word.slice(i)]
      recursive_tree(remainder, [...elements, {
        ...element_data[entry.toUpperCase()],
        match: element_data[entry.toUpperCase()] ? true : false,
        symbol: entry.toLowerCase(),
      }]);
    }
  }
  
  function score(elements) {
    // Boost the score of two character elements (for interest)
    let score = elements
      .filter(entry => entry.match)
      .reduce((total, entry) => total + entry.symbol.length, 0)
    
    return score;
  }

  if(options.length === 1) {
    return options
  }
  
  // remove the ones that score nothing
  options = options
    .filter(option => option.score !== 0)
    .sort((a, b) => {
      if(a.score === b.score) { // shorter results rank higher
        return a.elements.length - b.elements.length
      }
      return b.score - a.score
    })

  return options;
}