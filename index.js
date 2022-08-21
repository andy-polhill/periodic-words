const form = document.getElementById("input_form")
const elements_container = document.getElementById("elements")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  elements_container.innerHTML = ""

  const string = new FormData(event.target).get("string")
  const options = parse(string)
  console.log(options);

  // let pretty = options.map(option => option.elements.map(element => entry.symbol))
  if(!options.length) {
    console.log("No options")
    return;
  }

  const top_option = options[0];

  top_option.elements.forEach(element => {
    elements_container.appendChild(createElement(element))
  })
});

function createElement(element) {
  const element_node = document.createElement("div")
  element_node.className = "element"

  const top_row = document.createElement("span")
  top_row.className = `element__top-row`
  top_row.appendChild(createNode(element.number, "number"))
  top_row.appendChild(createNode(element.mass, "mass"))
  element_node.appendChild(top_row)

  element_node.appendChild(createNode(element.symbol, "symbol"))
  element_node.appendChild(createNode(element.name, "name"))

  if(element.match) {
    element_node.className = `${element_node.className} element--${element.category_class}`
  } else {
    element_node.className = element_node.className + ' element--' +
      (element.symbol === " " ? "empty" : "unmatched" )
  }


  return element_node;
}

function createNode(property, name) {
  const node = document.createElement("span")
  node.className = `element__${name}`
  node.innerHTML = property || "&nbsp"

  return node;
}