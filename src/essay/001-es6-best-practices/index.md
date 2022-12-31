[[toc]]

## Vanilla `for` loop

```javascript
// Old and Bad way

for (var i = 0; i < 10; i++) {
  // Do Stuff
}
// End of loop

console.log(i);
// 10
// iterator still accessible after the end of the loop
```

Using _var_ to initialize the iterator in the traditional _for_ loop causes it to be accessible even after the loop is over. A better alternative is to use the newer _let_ keyword to initialize the iterator.

```javascript
// Better way

for (let i = 0; i < 10; i++) {
  // Do Stuff
}
// End of loop

console.log(i);
// undefined
// iterator not accessible
```

The _let_ keyword limits the scope of the iterator to the for loop block only.

## Newer flavors of `for` loop

The ES6 revision also provides two new for loops the _for..of_ and _for..in_ loop.

**_for..of_:**

```javascript
let primes = [2, 3, 5, 7];

for (const value of primes) {
  console.log(value);
}
// 2
// 3
// 5
// 7
// Iterates over the values of the array
```

**_for..in_:**

```javascript
let primes = [2, 3, 5, 7];

for (const key in primes) {
  console.log(key);
}
// '0'
// '1'
// '2'
// '3'
// Iterates over the keys of the array
```

Notice that the _for..in_ loop here returns the keys in the form of strings and not numbers as one would expect. Another weird thing about the _for..in_ loops is that they can iterate thru an object while the _for..of_ loop cannot:

```javascript
let sandwich = {
  grilled: true,
  butter: "lots",
  bread: "whole wheat",
  calories: 250,
};

for (const value of sandwich) {
  console.log(value);
}
// Error: Objects are not iterable

for (const key in sandwich) {
  console.log(key);
}
// "grilled"
// "butter"
// "bread"
// "calories"
```

## `const` vs `let`

If you were reading until now really carefully, you would have noticed that I have use _let_ in the vanilla _for_ loop and _const_ in the ES6 flavors of _for_ loops. The vanilla _for_ just increases the initial iterator value and there is a single scope for the whole loop. Thus using _const_ won't work as increasing the iterator value in the next iteration will result in an error. In the newer loops however, every iteration creates a new scope. Thus we can use _const_ as well as _let_ in these loops. _const_ is more preferred in such cases as we don't want to change the value of the iterable.
