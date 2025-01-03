# Event Lifecycle - Bubbling and Capturing, Event Delegation

Event bubbling and capturing are two phases of event propagation in the DOM, while event delegation is a pattern used to handle events efficiently. Understanding these concepts is crucial for managing event behavior in web applications.

## Event Propagation: Bubbling and Capturing

Event propagation describes how events travel through the DOM tree. When an event occurs on an element, it doesn't just trigger on that element; it can also propagate through ancestor elements. There are three phases of event propagation:

1. **Capturing Phase**: The event starts from the document root and travels down to the target element.
2. **Target Phase**: The event is at the target element where the event actually occurred.
3. **Bubbling Phase**: The event travels back up from the target element to the document root.

### **Event Bubbling**

Event bubbling is the process where an event propagates from the target element up to the root of the DOM tree. By default, events in the DOM propagate using bubbling.

**Example**:
```html
<div id="parent">
  <button id="child">Click Me!</button>
</div>
<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  });
  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>
```

If you click the button, the console will log "Child clicked" followed by "Parent clicked." This is because the click event bubbles up from the child button to the parent div.

### **Event Capturing**

Event capturing (also known as "trickling") is the opposite of bubbling. The event is first captured by the outermost element and propagated to the target element. To listen to an event during the capturing phase, you pass `true` as the third argument to `addEventListener()`.

**Example**:
```html
<div id="parent">
  <button id="child">Click Me!</button>
</div>
<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  }, true);
  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>
```

With capturing enabled on the parent, if you click the button, the console will log "Parent clicked" followed by "Child clicked."

## Event Delegation

Event delegation is a technique that leverages event bubbling to handle events efficiently. Instead of adding an event listener to each individual element, you add a single event listener to a common parent element. This is especially useful when working with a large number of similar elements or dynamically generated content.

**Example**:
```html
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  const list = document.getElementById('itemList');

  // Attach an event listener to the parent element
  list.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
      console.log(`Clicked on ${event.target.textContent}`);
    }
  });
</script>
```

Here, a single event listener is added to the `ul` element. When any `li` item is clicked, the event bubbles up to the `ul`, where the event listener is set. The listener checks if the clicked element (`event.target`) is an `li` and handles it accordingly. This is more efficient than adding a listener to each `li` element.

## Summary

- **Event Bubbling**: The event propagates from the target element up to the root of the DOM. Default propagation phase in most browsers.
- **Event Capturing**: The event propagates from the root of the DOM down to the target element. Set by passing `true` as the third argument to `addEventListener()`.
- **Event Delegation**: A pattern where a single event listener is used on a parent element to handle events from multiple child elements, leveraging event bubbling.
