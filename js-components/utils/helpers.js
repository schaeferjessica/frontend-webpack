// Returns a node.
export const $ = (selector, root = document) => root.querySelector(selector);

// Returns an array of nodes.
export const $$ = (selector, root = document) => [
  ...root.querySelectorAll(selector),
];

// Find the closest element by selector.
export const closest = (element, selector, checkSelf = true) => {
  let parent = checkSelf ? element : element.parentNode;
  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode;
  }
  return false;
};

// Adds multiple attributes at once.
export const setAttributes = (el, options) => {
  Object.keys(options).forEach(attr => {
    el.setAttribute(attr, options[attr]);
  });
};

/**
s
 * Useful method to parse text as HTML.
 *
 * Possible values for position in comparison to jQuery:
 * 'beforebegin' - $().before
 * 'afterbegin'  - $().prepend
 * 'beforeend'   - $().append
 * 'afterend'    - $().insertAfter
 */
export const insertHTML = (node, position, htmlString) => {
  node.insertAdjacentHTML(position, htmlString);
};
