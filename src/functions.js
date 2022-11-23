function createElement(type, className, parentEl) {
    const element = document.createElement(type);
    element.classList.add(className);

    // If parent element has been created via this function
    // (e.g: const span3 = createEl2('span', 'span3', taskDescriptionDiv))
    if (parentEl.element) {
        parentEl.element.appendChild(element);
    // (e.g: const span3 = document.createElement('span');)
    } else {
        parentEl.appendChild(element);
    }

    return element
}

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(-1)); 

export { createElement as default, increment };