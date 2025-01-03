# Creating & Deleting DOM Tree

Creating and deleting elements in the DOM (Document Object Model) is a fundamental aspect of dynamic web development. JavaScript provides various methods to create, insert, and remove elements in the DOM tree.

## Creating Elements

To create new elements and insert them into the DOM, you can use the following methods:

#### 1. **Creating Elements**

To create a new HTML element, use the `document.createElement()` method.

**Syntax**: `document.createElement(tagName)`

- `tagName`: The name of the HTML tag to create (e.g., `div`, `p`, `span`).

**Example**:
```html
<!-- Initial HTML structure -->
<div id="parent">Existing content</div>
<script>
  // Create a new <p> element
  const newParagraph = document.createElement('p');
  
  // Set the text content of the new element
  newParagraph.textContent = 'This is a new paragraph.';

  // Set an attribute
  newParagraph.setAttribute('class', 'new-class');

  // Append the new element to the parent div
  const parent = document.getElementById('parent');
  parent.appendChild(newParagraph);
</script>
```

In this example, a new `<p>` element is created, its text content is set, and it is appended as a child of the `parent` element.

#### 2. **Setting Content and Attributes**

After creating an element, you can set its content and attributes using properties like `innerHTML`, `textContent`, and `setAttribute()`.

**Example**:
```html
<script>
  // Create a new <img> element
  const newImage = document.createElement('img');
  
  // Set the src and alt attributes
  newImage.setAttribute('src', 'image.jpg');
  newImage.setAttribute('alt', 'Sample Image');
  
  // Append the new element to the body
  document.body.appendChild(newImage);
</script>
```

## Inserting Elements

Once an element is created, you can insert it into the DOM at a desired location using methods like `appendChild()`, `insertBefore()`, and `insertAdjacentElement()`.

#### 1. **appendChild()**

The `appendChild()` method adds a new child node to the end of the list of children of a specified parent node.

**Syntax**: `parentNode.appendChild(newNode)`

**Example**:
```html
<script>
  const parent = document.getElementById('parent');
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Newly added div';
  
  // Append the new div as a child of the parent
  parent.appendChild(newDiv);
</script>
```

#### 2. **insertBefore()**

The `insertBefore()` method inserts a new node before a specified existing child node.

**Syntax**: `parentNode.insertBefore(newNode, referenceNode)`

**Example**:
```html
<script>
  const parent = document.getElementById('parent');
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Inserted div';
  
  // Insert the new div before the first child of the parent
  parent.insertBefore(newDiv, parent.firstChild);
</script>
```

#### 3. **insertAdjacentElement()**

The `insertAdjacentElement()` method inserts an element at a specified position relative to the target element.

**Syntax**: `targetElement.insertAdjacentElement(position, newElement)`

- `position`: Specifies the position relative to the target element (`'beforebegin'`, `'afterbegin'`, `'beforeend'`, `'afterend'`).

**Example**:
```html
<script>
  const parent = document.getElementById('parent');
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Another inserted div';
  
  // Insert the new div at the beginning of the parent element
  parent.insertAdjacentElement('afterbegin', newDiv);
</script>
```

## Deleting Elements

To remove elements from the DOM, you can use methods like `removeChild()`, `remove()`, and `replaceChild()`.

#### 1. **removeChild()**

The `removeChild()` method removes a specified child node from the DOM and returns the removed node.

**Syntax**: `parentNode.removeChild(childNode)`

**Example**:
```html
<script>
  const parent = document.getElementById('parent');
  const childToRemove = parent.querySelector('p');
  
  // Remove the specified child element
  parent.removeChild(childToRemove);
</script>
```

#### 2. **remove()**

The `remove()` method removes the element from the DOM. It does not return the removed element.

**Syntax**: `element.remove()`

**Example**:
```html
<script>
  const elementToRemove = document.getElementById('elementId');
  
  // Remove the element from the DOM
  elementToRemove.remove();
</script>
```

#### 3. **replaceChild()**

The `replaceChild()` method replaces an existing child node with a new node.

**Syntax**: `parentNode.replaceChild(newNode, oldNode)`

**Example**:
```html
<script>
  const parent = document.getElementById('parent');
  const newElement = document.createElement('div');
  newElement.textContent = 'Replaced content';
  
  const oldElement = parent.querySelector('p');
  
  // Replace the old element with the new element
  parent.replaceChild(newElement, oldElement);
</script>
```

## Summary

- **Creating Elements**: Use `document.createElement()` to create new elements and set their content and attributes using properties like `textContent`, `innerHTML`, and `setAttribute()`.
- **Inserting Elements**: Use `appendChild()`, `insertBefore()`, or `insertAdjacentElement()` to add new elements to the DOM at the desired locations.
- **Deleting Elements**: Use `removeChild()` or `remove()` to delete elements from the DOM, and `replaceChild()` to replace existing elements with new ones.

These methods allow developers to dynamically alter the content and structure of a webpage, enabling interactive and responsive user experiences.