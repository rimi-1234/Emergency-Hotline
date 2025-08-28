
###  Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

The differences between getElementById, getElementsByClassName, and querySelector/querySelectorAll is
### 1. getElementById
-It selects a single element based on its unique id attribute.
-It returns a single Element object or null

### 2. getElementsByClassNam
-It selects elements that have the given same class name
-It returns HTMLCollection
-it live means if there are elements add thats updates automatically.
### 3. getElementsByClassNam
-It selects elements that have the given same class name
-It returns HTMLCollection
-it live means if there are elements add thats updates automatically.
### 4. querySelector
-It selects first element that matches the CSS selector.
-It returns a single Element object or null
-it not live means if there are elements add thats not updates automatically.

2. How do you **create and insert a new element into the DOM**?
The process of create and insert a new element into the DOM:
### 1. Creating new Element:
-The document.createElement() method is used to create a new HTML element node
-It takes a string Which sets the tag name of the element and it can create such as 'div','p'
-Then it can set its attributes, classes, and content.
### 1. Insert a new Element:
-When the element is created,it need to append it to an existing element in the DOM.
Eample
-appendChild():It appends the new element as the last child of a specified parent element.
3. What is **Event Bubbling** and how does it work?
-Event Bubbling is the process where a user interacts with an element such as clicking a button, the event is triggered on that specific element. Then, it bubbles up through its ancestor elements in the DOM tree until it reaches the <html>  element.Means all ancestor of elements can also catch the same event, untill stopped.
4. What is **Event Delegation** in JavaScript? Why is it useful?
-Here an event listener is added to a parent element instead of adding separate listeners to each child element. when user interacts with an element such as clicking a button  it "bubbles up" to its parent and ancestors. so allowing the parent to “delegate” the handling.
Beacuse of the reason of its usefull
-It increases the Efficiency.It add one listener on the parent instead of adding a lot of event listeners to each element 
-It works for elements added later dynamically.
- it use less memory
5. What is the difference between **preventDefault() and stopPropagation()** methods?
### 1. preventDefault()
It stops prevents the default action such as
-From submitting is the prevents the default action

