const createElement = (type, className, parentEl) => {
    const element = document.createElement(type);
    element.classList.add(className);
    document.querySelector(parentEl).appendChild(element);

    const updateContent = (newContent) => element.textContent = newContent;

    return {
        element,
        updateContent
    };
};

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(-1)); 

export { createElement as default, increment };