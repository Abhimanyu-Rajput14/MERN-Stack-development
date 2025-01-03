// A function that takes another function as an argument and returns a memoized version of it
function memoize(fn) {
    const cache = new Map(); // Create a cache to store results
  
    return function (...args) { // Return a new function that has access to the cache
      const key = JSON.stringify(args); // Convert arguments to a string to use as a cache key
  
      if (cache.has(key)) {
        return cache.get(key); // Return cached result if available
      }
  
      const result = fn(...args); // Call the original function with arguments
      cache.set(key, result); // Store the result in the cache
      return result; // Return the result
    };
  }
  
  // Example function to demonstrate memoization: a function to compute the nth Fibonacci number
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Create a memoized version of the Fibonacci function
  const memoizedFibonacci = memoize(fibonacci);
  
  // Test the memoized function
  console.log(memoizedFibonacci(40)); // Computed and cached
  console.log(memoizedFibonacci(40)); // Retrieved from cache, much faster
  