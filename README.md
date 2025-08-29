1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : The methods getElementById , getElementByClassName , querySelector and querySelectorAll in javascript are used to select elements from Dom.There are some difference between them , 

getElementById : Selects a single element based on its unique id attribute. Returns null if no element with the specified ID is found.

getElementsByClassName: Selects all elements that possess the specified class names .

querySelector: Selects the first element that matches a given CSS selector . Returns null if no matching element is found. 

querySelectorAll: Selects all elements that match a given CSS selector. Returns an empty NodeList if no matching elements are found. 


2. How do you create and insert a new element into the DOM?

Ans : creating a div in DOM ,
	const child = document.createElement('div');

inserting new element ,
    	const parentElement = document.getElementById('parent_id'); 
    	parentElement.appendChild(child);


3. What is Event Bubbling and how does it work?
Ans : Event bubbling means when you click an element , the event first triggers on the element then it move to parent element .For example, clicking a button inside a <div> will also trigger the click event on the <div>, then on parent and so on. You can stop this upward flow using event.stopPropagation().


4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is a technique where we can add a event listener to a parent element to handle its child elements . It is useful for improve performance and make it easier to manage dynamic elements .


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault() method prevent the default action of browsers taking on that event. For example, it prevents the browser from following a link. 
syntax : event.preventDefault();

stopPropagation() method prevent further propagation of current events by parent or child elements.It can not stop the default behavior of the browser.
syntax : event.stopPropagation();
