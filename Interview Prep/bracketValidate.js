function isValidBrackets(s) {
    const stack = [];
    const bracketMap = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let char of s) {
      if (bracketMap[char]) {
        // If it's an opening bracket, push to the stack
        stack.push(char);
      } else {
        // If it's a closing bracket
        const lastOpeningBracket = stack.pop();
        if (bracketMap[lastOpeningBracket] !== char) {
          return false; // Mismatched brackets
        }
      }
    }
  
    // If stack is empty, all brackets matched correctly
    return stack.length === 0;
  }
  
  // Example usage
  console.log(isValidBrackets("()")); // true
  console.log(isValidBrackets("()[]{}")); // true
  console.log(isValidBrackets("(]")); // false
  console.log(isValidBrackets("([)]")); // false
  console.log(isValidBrackets("{[]}")); // true
  