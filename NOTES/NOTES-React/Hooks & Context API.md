### **React Hooks: Managing State and Lifecycle**

React Hooks provide a powerful way to manage state and lifecycle in functional components. Let's dive into the two most commonly used hooks: **`useState`** and **`useEffect`**, followed by an introduction to **Context API** for state management across components.

---

### **1. `useState` Hook**

The `useState` hook is used to manage state in functional components. It allows you to define state variables and update their values.

#### **Syntax**
```javascript
const [state, setState] = React.useState(initialValue);
```

#### **Example**
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

---

### **2. `useEffect` Hook**

The `useEffect` hook handles side effects like:
- Fetching data.
- Subscribing to or cleaning up resources like event listeners.

#### **Syntax**
```javascript
React.useEffect(() => {
  // Code to run after render.
  return () => {
    // Optional cleanup code.
  };
}, [dependencies]);
```

- **No dependencies (`[]`)**: Runs once after the component mounts.
- **Specific dependencies**: Runs whenever the dependency changes.
- **No second argument**: Runs after every render.

#### **Example: Logging State Changes**
```javascript
import React, { useState, useEffect } from 'react';

function Logger() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(`Message updated: ${message}`);
  }, [message]); // Runs when `message` changes

  return (
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
}

export default Logger;
```

---

#### **Example: Fetching Data**
```javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); // Run only once after the component mounts

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default FetchData;
```

---

### **3. Context API: State Management**

The **Context API** is used to manage global state, avoiding "prop drilling" (passing props down through many levels of components).

#### **Steps to Use Context API**

1. **Create Context**
   ```javascript
   const MyContext = React.createContext();
   ```

2. **Provide Context**
   Wrap your component tree with a context provider and pass the state you want to share:
   ```javascript
   function App() {
     const [theme, setTheme] = useState('light');

     return (
       <MyContext.Provider value={{ theme, setTheme }}>
         <Toolbar />
       </MyContext.Provider>
     );
   }
   ```

3. **Consume Context**
   Access the shared state in any child component using `useContext`:
   ```javascript
   import React, { useContext } from 'react';

   function Toolbar() {
     const { theme, setTheme } = useContext(MyContext);

     return (
       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
         Toggle Theme (Current: {theme})
       </button>
     );
   }
   ```

---

### **Comparison: Props, State, and Context API**

| Feature            | Props                         | State                         | Context API                  |
|--------------------|-------------------------------|-------------------------------|------------------------------|
| **Scope**          | Passed from parent to child. | Local to the component.       | Shared across components.    |
| **Mutability**     | Immutable.                   | Mutable using `setState`.     | Mutable with state logic.    |
| **Purpose**        | Pass data and behavior.       | Manage dynamic local data.    | Manage global/shared state.  |
| **Best Use Case**  | Static data or callbacks.     | Component-specific behavior.  | App-wide state management.   |

---

### **Example: Combining Hooks and Context**

Let’s build a **Theme Toggle App** with `useState`, `useContext`, and Context API.

#### **Step 1: Create Context**
```javascript
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
```

#### **Step 2: Wrap App in Provider**
```javascript
import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

#### **Step 3: Consume Context in a Component**
```javascript
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;
```

---

### **Next Steps**
We’ve covered:
1. **useState** for local state.
2. **useEffect** for side effects.
3. **Context API** for global state.
