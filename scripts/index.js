const start_words = [
  'Gandalf',
  'Britain',
  'Mountain',
  'Banana',
  'Biscuits',
  'Pakistan',
  'France',
  'Ben Nevis',
  'Helicopter',
  'Southern',
  'Cornwallis',
  'Nanga Parbat',
  'Beach Tennis'
]

class word_generator {
  constructor() {
    const search_params = new URLSearchParams(window.location.search)
    const text = search_params.get('text')
    const index = search_params.get('index')
    
    this.form = document.getElementById("input_form")
    this.text_input = document.getElementById("text_input")

    this.elements_container = document.getElementById("elements")
    this.next = document.getElementById("next")
    this.prev = document.getElementById("prev")
    this.current_page = document.getElementById("current_page")
    
    this.share_button = document.getElementById("share")
    this.toast = document.getElementById("toast")
    this.toast_content = document.getElementById("toast_content")

    this.form.addEventListener("submit", (e) => {
      e.preventDefault()
      this.selected_index = 0;
      this.start()
    })
    this.next.addEventListener("click", () => this.change_result(1))
    this.prev.addEventListener("click", () => this.change_result(-1))
    this.share_button.addEventListener("click", () => this.share())

    this.results = [];

    if(text) {
      this.text_input.value = text
    } else {
      this.text_input.value = start_words[Math.floor(Math.random() * start_words.length)]
    }

    this.selected_index = 0;
    if(index) {
      this.selected_index = parseInt(index, 10)
    }
    this.start()
  }

  start() {
    this.elements_container.innerHTML = ""
    
    const text_input = this.text_input.value
    this.update_og_image(text_input)
    plausible('periodic-element-parse', { text_input })
    this.results = parse(text_input)
  
    if(!this.results.length) {
      console.log("No options")
      return;
    }
    this.render_result()
  }

  update_og_image(text_input) {
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute(
        "content",
        `https://social-image-capture-wioykkdv7a-nw.a.run.app/?text=${text_input}&index=${this.selected_index}`);
  }

  render_result() {
    this.elements_container.innerHTML = "";
    this.results[this.selected_index].elements.forEach(element => {
      this.elements_container.appendChild(this.create_element(element))
    })

    if(this.selected_index === 0) {
      this.prev.setAttribute("disabled", "");
    } else {
      this.prev.removeAttribute("disabled");
    }

    if(this.selected_index === this.results.length - 1) {
      this.next.setAttribute("disabled", "");
    } else {
      this.next.removeAttribute("disabled");
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
    const element_node = document.createElement(element.match ? "a" : "span")
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
      element_node.setAttribute("href", element.href)
      element_node.setAttribute("target", "wikipedia")
    } else {
      element_node.className = element_node.className + " element--" +
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

  async share() {
    const { protocal, host, pathname } = window.location
    let url = `
      ${location.protocol}//${location.host}${location.pathname}`
      + `?text=${this.text_input.value}&index=${this.selected_index}`;

    try {
      await navigator.clipboard.writeText(url)
      this.toast_content.innerHTML = "Share link copied to clipboard"
    } catch(e) {
      this.toast_content.innerHTML = "Copy to clipboard failed ⤫"
    };
    this.toast.style.display = "inline-flex"
    setTimeout(() => {
      this.toast.style.display = "none"
    }, 3000)
  }
}

new word_generator();



