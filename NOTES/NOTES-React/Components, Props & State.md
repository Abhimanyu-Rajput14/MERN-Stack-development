### **Class vs Functional Components in React**

React components are the building blocks of a React application. They can be created using either **class-based** or **functional** components.

---

### **1. Class Components**
Class components are ES6 classes that extend `React.Component`. They are capable of managing **state** and **lifecycle methods**.

#### **Features**
- Can have a **state** object.
- Use **lifecycle methods** like `componentDidMount` and `componentDidUpdate`.
- More verbose syntax compared to functional components.

#### **Example**
```javascript
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```

---

### **2. Functional Components**
Functional components are plain JavaScript functions that accept props as an argument and return JSX. With the introduction of **React Hooks** in React 16.8, functional components can now manage state and lifecycle events.

#### **Features**
- Simpler and shorter syntax.
- Can use **Hooks** (`useState`, `useEffect`) to manage state and lifecycle behavior.
- Easier to read and test.

#### **Example**
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

---

### **Comparison: Class vs Functional Components**

| **Aspect**            | **Class Components**                    | **Functional Components**          |
|-----------------------|-----------------------------------------|-------------------------------------|
| **State Management**  | Use `this.state` and `this.setState`.   | Use `useState` hook.               |
| **Lifecycle Methods** | Use methods like `componentDidMount`.   | Use `useEffect` hook.              |
| **Syntax**            | More verbose with `this` bindings.      | Simpler and concise.               |
| **Performance**       | Slightly slower due to class overhead.  | Faster, optimized for modern React.|

---

### **State vs Props in React**

#### **1. Props**
Props (short for "properties") are used to pass data from a parent component to a child component. Props are **read-only** and cannot be modified by the receiving component.

#### **Example**
```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage in parent component
<Greeting name="React" />
```

#### **Key Points**
- Props are immutable.
- Used to pass data and behavior to child components.

---

#### **2. State**
State is used to manage dynamic data within a component. Unlike props, **state is mutable** and can be updated using the `setState` method (in class components) or `useState` hook (in functional components).

#### **Example in Class Component**
```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

#### **Example in Functional Component**
```javascript
function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

#### **Key Points**
- State is mutable.
- Changes to state cause the component to re-render.
- State is local to the component and not accessible by others.

---

### **Handling Input and Forms in React**

Forms are an essential part of many applications, allowing users to submit data.

#### **1. Controlled Components**
In controlled components, form elements are controlled by React state.

#### **Example**
```javascript
function Form() {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

#### **2. Uncontrolled Components**
In uncontrolled components, form data is handled by the DOM itself, not React state. Ref is used to access input values.

#### **Example**
```javascript
function Form() {
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### **Handling Forms in Class Components**

#### **Example**
```javascript
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${this.state.name}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

---

### **Summary**
1. **Class Components** are more verbose but useful for older codebases.
2. **Functional Components** are modern and preferred due to simplicity and hooks.
3. **Props** pass immutable data from parent to child components.
4. **State** manages dynamic data local to a component.
5. React forms can be implemented as **controlled** or **uncontrolled** components.
