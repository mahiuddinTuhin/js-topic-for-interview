### Closure

###### closure is the ability of a function to capture and retain(holds) the values of its local variables, even after the function has completed execution.

```
function createCounter() {
  let count = 0; // Outer scope variable

  return function() {
    count++; // Inner function accesses count
    return count;
  };
}

const counter = createCounter(); // Assigning the inner function to counter

```
