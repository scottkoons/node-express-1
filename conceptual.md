### Conceptual Exercise

Answer the following questions below:

- **What are some ways of managing asynchronous code in JavaScript?**
	
	*The most method to managing asynchonous JS code is to use callback functions with the async/await approach.*

- **What is a Promise?**

	*A promise is an object that represents the eventual completion of an async operation, and its resulting value.*
	
- **What are the differences between an async function and a regular function?**

	*An Async function returns a promise and you can use await keyword to get that value. Async/Await is just syntactical sugar over Promises which make Async code look synchronous. A regular function simply executes in the order it was called.*

- **What is the difference between Node.js and Express.js?**

	*Node.js is a back-end service using javascript to run code on the server. Express.js is a micro-framework that sits on top of node.js and controls how the front-end looks and operates.  This is similar to how Flask sits upon the Python's server-side code.*

- **What is the error-first callback pattern?**

	*The error-first callback pattern is a way to enable a balanced flow for asynchonous callbacks to scale in production applications. The first parameter of a callback is “reserved” for a possible error object. The second parameter is for successful response data. If there is no error then the error parameter will be null. This means that successfully returned data is expected to be in the second argument.*

- **What is middleware?**

	*It is code that runs in the middle of the request/response cycle.*

- **What does the `next` function do?**

	*The `next` function is the third element passed to a middleware function. It's purpose is to pass control to the next middleware function.  If not, then the request will be left hanging or open.*

- **What does `RETURNING` do in SQL? When would you use it?**

	*It is used to unconditionally and immediately terminate a SQL proceedure.  By using `RETURNING` can help avoid multiple database calls and, thus, can save time and resources.
*
- **What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)**

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
*The above code will have a very slow response and will execute three responses vs one. You can use a `try/catch` code block to help eliminate some of the immediate errors. The code could also use promises and `async/await` requests so the data is not called in a sequential order.  Using `async/await` allows all of the call to be made simultaneously and then processed once they are received vs in a strick sequential order.*