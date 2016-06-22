Object.defineProperties(HTMLElement.prototype, {
  outerHeight: {
    get: function() {
      if (!this.parentNode) return 0;
      var style = getComputedStyle(this);
      // Note: box-sizing: border-box; doesn't affect results as offsetHeight accounts for this.
      return this.offsetHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    },
  },
  outerWidth: {
    get: function() {
      if (!this.parentNode) return 0;
      var style = getComputedStyle(this);
      // Note: box-sizing: border-box; doesn't affect this either.
      return this.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    },
  },
});
