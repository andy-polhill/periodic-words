

class word_generator {
  constructor() {
    this.form = document.getElementById("input_form")
    this.elements_container = document.getElementById("elements")
    this.next = document.getElementById("next")
    this.prev = document.getElementById("prev")
    this.current_page = document.getElementById("current_page")
    
    this.form.addEventListener("submit", (e) => this.start(e))
    this.next.addEventListener("click", () => this.change_result(1))
    this.prev.addEventListener("click", () => this.change_result(-1))

    this.results = [];
  }

  start(event) {
    event.preventDefault()
    this.elements_container.innerHTML = ""
  
    const string = new FormData(event.target).get("string")
    this.results = parse(string)

    console.log(this.results)
  
    // let pretty = options.map(option => option.elements.map(element => entry.symbol))
    if(!this.results.length) {
      console.log("No options")
      return;
    }

    this.selected_index = 0
    this.render_result()
  }

  render_result() {
    this.elements_container.innerHTML = "";
    this.results[this.selected_index].elements.forEach(element => {
      this.elements_container.appendChild(this.create_element(element))
    })

    if(this.selected_index === 0) {
      this.prev.setAttribute('disabled', '');
    } else {
      this.prev.removeAttribute('disabled');
    }

    if(this.selected_index === this.results.length - 1) {
      this.next.setAttribute('disabled', '');
    } else {
      this.next.removeAttribute('disabled');
    }

    this.current_page.innerHTML = `${this.selected_index + 1} of ${this.results.length}`
  }

  change_result(index_change) {
    this.selected_index = Math.min(
      Math.max(0, this.selected_index + index_change),
      this.results.length - 1
    );
    this.render_result()
  }
  
  create_element(element) {
    const element_node = document.createElement("div")
    element_node.className = "element"
  
    const top_row = document.createElement("span")
    top_row.className = `element__top-row`
    top_row.appendChild(this.create_node(element.number, "number"))
    top_row.appendChild(this.create_node(element.mass, "mass"))
    element_node.appendChild(top_row)
  
    element_node.appendChild(this.create_node(element.symbol, "symbol"))
    element_node.appendChild(this.create_node(element.name, "name"))
  
    if(element.match) {
      element_node.className = `${element_node.className} element--${element.category_class}`
    } else {
      element_node.className = element_node.className + ' element--' +
        (element.symbol === " " ? "empty" : "unmatched" )
    }
  
    return element_node;
  }
  
  create_node(property, name) {
    const node = document.createElement("span")
    node.className = `element__${name}`
    node.innerHTML = property || "&nbsp"
    return node;
  }
}

new word_generator();



