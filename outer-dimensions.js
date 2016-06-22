(function() {

// Note: box-sizing: border-box; doesn't seem to affect results as
// offset{Height,Width} already accounts for this.

/**
 * @param {!HTMLElement} el
 * @param {!CSSStyleDeclaration} style
 */
function getHeight(el, style) {
  return el.offsetHeight
      // These are accounted for by offsetWidth.
      // + parseFloat(style.borderTopWidth)
      // + parseFloat(style.borderBottomWidth)
      + parseFloat(style.marginTop)
      + parseFloat(style.marginBottom);
}

/**
 * @param {!HTMLElement} el
 * @param {!CSSStyleDeclaration} style
 */
function getWidth(el, style) {
  return el.offsetWidth
      // + parseFloat(style.borderLeftWidth)
      // + parseFloat(style.borderRightWidth)
      + parseFloat(style.marginLeft)
      + parseFloat(style.marginRight);
}

/**
 * @param {!HTMLElement} el
 * @return {boolean} Whether |el| can have valid dimensions.
 */
function hasDimensions(el) {
  return !!el.parentNode;
}

Object.defineProperties(HTMLElement.prototype, {
  outerDimensions: {
    get: function() {
      if (!hasDimensions(this))
        return {height: 0, width: 0};

      var styles = getComputedStyle(this);
      return {
        height: getHeight(this, styles),
        width: getWidth(this, styles),
      };
    },
  },

  outerHeight: {
    get: function() {
      return hasDimensions(this) ? getHeight(this, getComputedStyle(this)) : 0;
    },
  },

  outerWidth: {
    get: function() {
      return hasDimensions(this) ? getWidth(this, getComputedStyle(this)) : 0;
    },
  },
});

})();
