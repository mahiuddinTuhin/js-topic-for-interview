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

#### A recursive function is a function that calls itself somewhere within the body of the function itself. This process is called reccursion. This is alternative of loop.

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

## Mutibility and Immutability

#### A mutable value is one that can be changed without creating an entirely new value. In JavaScript, objects and arrays are mutable by default, but primitive values are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned.

primitive types like numbers and strings are immutable. However, when you perform an operation like:

```

let x = 23;
x = 12;

```

What's happening here is that you're not directly modifying the value of x. Instead, you're reassigning x to a new value. In JavaScript, immutable primitives mean that once a primitive value (like a number or string) is created, it cannot be changed.

When you write x = 12;, you're not changing the original value 23 to 12. Instead, you're updating the reference x to point to a new memory location that contains the value 12. The original value 23 remains unchanged, and a new value (12) is created and assigned to x. This behavior aligns with immutability because the original value (23) is not altered; rather, a new value (12) is assigned to the variable x.

but

```
let obj = {
    name: "Mr"
};

obj.name = "Mr Ahamed";
```

In JavaScript, when you do obj.name = "Mr Ahamed";, you're not creating a new memory location for obj.name. Instead, you're modifying the value that the name property of the obj object points to.
