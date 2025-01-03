# DOM Properties

In JavaScript, the DOM (Document Object Model) provides various properties and methods to interact with and manipulate the content and attributes of HTML elements. Some of the most commonly used properties and methods include `innerText`, `textContent`, `innerHTML`, `setAttribute`, and `getAttribute`. Each serves a different purpose in accessing or modifying the content and attributes of elements.

### 1. **innerText**

The `innerText` property gets or sets the text content of an element and all its descendants, while taking into account the CSS styles and the layout of the text.

- **Getting innerText**: Retrieves the visible text content of an element.
- **Setting innerText**: Sets the text content of an element, replacing any existing content. It also escapes HTML, meaning it doesn't render HTML tags but displays them as plain text.

**Example**:
```html
<div id="example">
  <p>Hello <strong>World</strong>!</p>
</div>
<script>
  const exampleDiv = document.getElementById('example');
  
  // Get the text content of the element
  console.log(exampleDiv.innerText); // Output: "Hello World!"

  // Set the text content of the element
  exampleDiv.innerText = 'New Content <b>Here</b>';
  // The HTML tags will be displayed as text: "New Content <b>Here</b>"
</script>
```

### 2. **textContent**

The `textContent` property gets or sets the text content of an element and all its descendants, without taking into account the CSS styles.

- **Getting textContent**: Retrieves all text content, including hidden elements.
- **Setting textContent**: Sets the text content of an element, escaping HTML tags and displaying them as plain text.

**Example**:
```html
<div id="example">
  <p style="display:none;">Hello <strong>World</strong>!</p>
</div>
<script>
  const exampleDiv = document.getElementById('example');
  
  // Get the text content, including hidden text
  console.log(exampleDiv.textContent); // Output: "Hello World!"

  // Set the text content of the element
  exampleDiv.textContent = 'New Content <b>Here</b>';
  // The HTML tags will be displayed as text: "New Content <b>Here</b>"
</script>
```

### 3. **innerHTML**

The `innerHTML` property gets or sets the HTML content inside an element.

- **Getting innerHTML**: Retrieves the HTML markup of an element's content.
- **Setting innerHTML**: Sets the HTML content of an element, rendering any HTML tags it contains.

**Example**:
```html
<div id="example">
  <p>Hello <strong>World</strong>!</p>
</div>
<script>
  const exampleDiv = document.getElementById('example');
  
  // Get the HTML content of the element
  console.log(exampleDiv.innerHTML); // Output: "<p>Hello <strong>World</strong>!</p>"

  // Set the HTML content of the element
  exampleDiv.innerHTML = 'New Content <b>Here</b>';
  // The HTML will be rendered: "New Content Here" (with bold formatting on "Here")
</script>
```

**Note**: While `innerHTML` is powerful, it should be used carefully, especially with user-generated content, to avoid cross-site scripting (XSS) attacks.

### 4. **setAttribute**

The `setAttribute` method is used to set the value of an attribute on a specified element. If the attribute already exists, it updates the value; if not, it creates a new attribute.

**Syntax**: `element.setAttribute(name, value)`

**Example**:
```html
<img id="example" src="image.jpg" alt="Sample Image">
<script>
  const img = document.getElementById('example');
  
  // Set the src attribute
  img.setAttribute('src', 'newImage.jpg');
  
  // Add a new attribute or update if it exists
  img.setAttribute('alt', 'Updated Image Description');
</script>
```

### 5. **getAttribute**

The `getAttribute` method retrieves the value of a specified attribute from an element.

**Syntax**: `element.getAttribute(name)`

**Example**:
```html
<img id="example" src="image.jpg" alt="Sample Image">
<script>
  const img = document.getElementById('example');
  
  // Get the value of the src attribute
  console.log(img.getAttribute('src')); // Output: "image.jpg"
  
  // Get the value of the alt attribute
  console.log(img.getAttribute('alt')); // Output: "Sample Image"
</script>
```

## Summary

- **`innerText`**: Gets or sets the visible text content of an element, taking CSS styles into account. It escapes HTML tags.
- **`textContent`**: Gets or sets the text content of an element, including hidden elements, without rendering HTML tags.
- **`innerHTML`**: Gets or sets the HTML content of an element, rendering HTML tags.
- **`setAttribute`**: Sets the value of an attribute on an element.
- **`getAttribute`**: Retrieves the value of an attribute from an element.

