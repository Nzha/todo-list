const createElement = (type, className, parentEl) => {
    const element = document.createElement(type);
    element.classList.add(className);
    document.querySelector(parentEl).appendChild(element);

    const updateContent = (newContent) => element.textContent = newContent;
    
    return {
        element,
        updateContent,
        getClassName() {
            return element.className;
        },
    };
};

export default createElement;