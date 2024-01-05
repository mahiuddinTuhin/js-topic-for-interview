## Closure

#### closure is the ability of a function to capture and retain(holds) the values of its local variables, even after the function has completed execution.

```
function createCounter() {
  let count = 0; // Outer scope variable

  return function() {
    count++; // Inner function accesses count
    return count;
  };
}

const counter = createCounter(); // Assigning the inner function to counter

// counter is a closure

```

## Recurssion

#### A recursive function is a function that calls itself somewhere within the body of the function itself. This process is called reccursion.

Below is a basic example of a recursive function.

function recursiveFunc() {
// some code here...
recursiveFunc()
}

```
function findFactorial(num) {
  if (num === 0) return 1
  let factorial = num * findFactorial(num - 1)
  return factorial;
}

findFactorial(5) // 120
```
