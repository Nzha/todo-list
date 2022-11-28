import { format, parseISO, isToday, isTomorrow } from 'date-fns';

function createElement(type, className, parentEl) {
    const element = document.createElement(type);
    element.classList.add(className);

    /**
    * If parent element has been previously created via this function
    * (e.g: const span3 = createEl2('span', 'span3', taskDescriptionDiv))
    */
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

function dateFormat(date) {
    // Convert string to instance of date
    date = parseISO(date);

    if (isToday(date)) {
        return 'Today';
    } else if (isTomorrow(date)) {
        return 'Tomorrow';
    } else {
        return format(new Date(date), 'MMM dd yyyy')
    }
}

export { createElement as default, increment, dateFormat };