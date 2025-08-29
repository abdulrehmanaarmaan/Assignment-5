1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans. getElementById() selects exactly one element with the given id. getElementsByClassName() selects all elements with the given class. querySelector() selects the first element that matches a given CSS selector. querySelectorAll() selects all elements that match a given CSS selector.

2. How do you create and insert a new element into the DOM?

Ans. I create a new element using document.createElement() and insert it into the DOM using append().

3. What is Event Bubbling and how does it work?

Ans. Event Bubbling is the process where an event starts from the target element(the deepest child where the event occured) and then propagates upward through its parent elements, one by one, until it reaches the root (document).

4. What is Event Delegation in JavaScript? Why is it useful?

Ans. Event Delegation is a technique that uses Event Bubbling to handle events efficiently on multiple child elements through a single parent listener. It is useful, because it improves performance, works with dynamically created elements and makes code cleaner.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans. preventDefault() method prevents the browser's default behaviour of an event whereas stopPropagation() method stops the process of Event Bubbling.
