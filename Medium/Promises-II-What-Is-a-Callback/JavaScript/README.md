https://edabit.com/challenge/W6RRCaj8mZJgiRAgy

Promises II: What Is a Callback?

Callbacks are first-class functions. This means they have first-class characteristics, like being able to be passed to other functions. There was a time when callbacks were used to handle async operations, but we needed something better because of a few shortcomings (like problems with nested callbacks).

Here's a simple example of a callback:

function asyncFunc(cb) {
  let result = ""
  // After some time the result of an async opertion comes back and is put in the "result" variable.  We'll use a string for this example.   
  result = "hello"
  cb(result)
}

function callback(str) {
  console.log(str)
}

asyncFunc(callback)
console.log("goodbye")

// goodbye
// hello
"goodbye" appears before "hello" because the async operation in asyncFunc() is non-blocking, meaning that it is set aside until it finishes but in the meantime we go ahead and call the next function.

Challenge
Fix anotherFunc() so that calls to it will change the doc variable to bye.
Keep the setTimeout to 100ms and do not change the callback function or the doc variable.
Notes
Check the Resources tab for more info on callbacks.