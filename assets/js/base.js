
/**
 * Toggles the class with the given name on/off from the element with the given id
 * 
 * @param {string} id 
 * @param {string} className
 */
function toggle(id, className) {
    var elem = document.getElementById(id);
    if(elem.classList.contains(className)) {
        elem.classList.remove(className);
    } else {
        elem.classList.add(className);
    }
}

/**
 * Hides the element with the given id
 * 
 * @param {string} id 
 */
function hide(id) {
    var elem = document.getElementById(id);
    if(!elem.classList.contains('hidden')) {
        elem.classList.add('hidden');
    }
}

/**
 * Shows the element with the given id
 * 
 * @param {string} id 
 */
function show(id) {
    var elem = document.getElementById(id);
    if(elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    }
}

/**
 * Removes the class with the given name from the element with the given id
 * 
 * @param {string} id 
 * @param {string} className
 */
function remove(id, className) {
    var elem = document.getElementById(id);
    if(elem.classList.contains(className)) {
        elem.classList.remove(className);
    }
}

/**
 * Adds the class with the given name from the element with the given id
 * 
 * @param {string} id 
 * @param {string} className
 */
function add(id, className) {
    var elem = document.getElementById(id);
    if(!elem.classList.contains(className)) {
        elem.classList.add(className);
    }
}

/**
 * Checks if the given element has the given class
 * 
 * @param {string} id 
 * @param {string} className
 */
function hasClass(id, className) {
    var elem = document.getElementById(id);
    return elem.classList.contains(className);
}