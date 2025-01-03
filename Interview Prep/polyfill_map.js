// Polyfill for Array.prototype.map
if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.map called on null or undefined');
      }
  
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const len = this.length;
      const result = new Array(len);
      const O = Object(this);
  
      for (let i = 0; i < len; i++) {
        if (i in O) {
          result[i] = callback.call(thisArg, O[i], i, O);
        }
      }
  
      return result;
    };
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(function(num) {
    return num * 2;
  });
  
  console.log(doubled); // [2, 4, 6, 8, 10]
  