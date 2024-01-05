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

## shift unshift and their alternative in js

Here's a comprehensive explanation of shift, unshift and their alternatives in JavaScript:

#### 1. shift():

Purpose: Removes the first element from an array and returns it.
Modifies the original array.
Example:

```

let numbers = [1, 2, 3];
let firstElement = numbers.shift(); // firstElement now holds 1, numbers becomes [2, 3]
```

##### Alternatives:

destructuring assignment:
JavaScript
let [first, ...rest] = numbers; // first holds 1, rest holds [2, 3] (numbers remains unchanged)

##### slice():

JavaScript
let newNumbers = numbers.slice(1); // newNumbers holds [2, 3], numbers remains unchanged

#### 2. unshift():

Purpose: Adds one or more elements to the beginning of an array.
Modifies the original array.
Example:

```
let numbers = [1, 2, 3];
numbers.unshift(0, -1); // numbers becomes [-1, 0, 1, 2, 3]
```

Alternatives:

##### concat():

```
let newNumbers = [-1, 0].concat(numbers); // newNumbers holds [-1, 0, 1, 2, 3], numbers remains unchanged
```

##### Spread operator (...):

```
let newNumbers = [...[-1, 0], ...numbers]; // same as above
```

##### When to Choose Alternatives:

Prefer alternatives when you want to avoid modifying the original array.
Alternatives often create new arrays, which can be less efficient for large arrays.
Use shift() and unshift() when direct modification is necessary and performance is not a critical concern.
Consider performance implications, especially for frequent operations on large arrays.
Choose methods that align with your coding style and readability preferences.

### Higher order function

```
Here's a clear explanation of higher-order functions with examples:

Higher-order functions (HOFs) are functions that treat other functions
as values. They can take functions as arguments, return functions as
results, or both. This powerful concept allows for:

Abstraction: Encapsulating common patterns of operations on data, making
code more concise and reusable.
Composition: Combining functions to create more complex functionality.
Flexibility: Passing different functions to HOFs to customize their behavior.
Common Examples in JavaScript:

map(): Applies a function to each element of an array, creating a new
array with the results.

JavaScript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => number * 2); // [2, 4, 6]
filter(): Creates a new array containing only elements that pass a test
implemented by a function.

JavaScript
const evenNumbers = numbers.filter(number => number % 2 === 0); // [2]
reduce(): Applies a function against an accumulator and each element in
an array (from left to right) to reduce it to a single value.

JavaScript
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// 6
Custom Higher-Order Function Example:

JavaScript
function applyTwice(func, x) {
  return func(func(x));
}

const square = number => number * number;
const result = applyTwice(square, 5); // 625 (5 squared twice)
Key Benefits of HOFs:

Cleaner code: Reduce code duplication and promote reusability.
Expressive abstractions: Create concise and readable solutions for
common patterns.
Functional programming style: Empower you to write more declarative
and pure code.
Powerful tools for data manipulation: Help handle complex data
transformations efficiently.
Sources
1. https://github.com/AsyncAF/AsyncAF
```
