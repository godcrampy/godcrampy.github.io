[[toc]]

ES6 introduced arrow functions which provide a way to write shorter and cleaner code.

```javascript
// Old way
function squareOld(number) {
  return number ** 2;
}

// ES6 way
const squareNew = (number) => number ** 2;

// Callbacks become cleaner
let array = [1, 2, 3, 4, 5, 6];

// Old
array.filter(function (value) {
  return value % 2 === 0;
});
// [2, 4, 6]

// ES6
array.filter((value) => value % 2 === 0);
// [2, 4, 6]
```

Note the following things:

1. The arrow function syntax returns the function which we need to store in a variable
2. We don't write the `return` keyword. When the function definition is of a single line, the output of that line is returned
3. There are not brackets around the argument `number`. (This isn't the case when there are more than one arguments)

### The Arrow Syntax

```javascript
// No arguments
const sayHi = () => console.log("Hi");

// One argument, One line
const addFive = (number) => number + 5;

// Multiple arguments, One line
const addNumbers = (a, b) => a + b;

// One argument, Multiple lines
const doStuffAndAddFive = (number) => {
  let flavour = "vanilla";
  makeIceCream(flavour);
  eatIceCream();
  return number; /* Note that here we have to use the return keyword */
};

// Multiple arguments, Multiple lines
const doStuffAndAddNumbers = (a, b) => {
  let flavour = "vanilla";
  makeIceCream(flavour);
  eatIceCream();
  return a + b;
};
```

### Binding in vanilla functions

Binding is what differentiates arrow functions from the vanilla functions. Every function has access to the `this` variable.

Consider the following:

```javascript
function getThis() {
  return this;
}
getThis();
// returns the global object
```

The above function returns the global object when invoked.

Now consider this:

```javascript
let obj = {
  fruit: "Apple",
  calories: 100,
  getThis: function () {
    return this;
  },
};

obj.getThis();
// returns the obj object
```

Now lets look at an ES6 _class_ example:

```javascript
class Fruit {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
  getThis() {
    return this;
  }
}

let apple = new Fruit("Apple", 97);
apple.getThis();
// returns apple
```

A peculiar case:

```javascript
let person = {
  name: "Sally",
  getName: function () {
    return this.name;
  },
};

let name = "Sergie";

person.getName();
// "Sally"

let foo = person.getName;

foo();
// "Sergie"
```

When we called `person.getName()`, `this` referred to the person object. Then, when we initialiazed `foo` with the same definition as `person.getName`,`this` referred to the global object.

How to figure out where the `this` keyword points to?

A good "hack" that works _*most*_ of the times is to check if the function call is preceded by the _dot operator_. If it is, then `this` in the function definition will refer to the object before the dot operator. In the above case `person.getName()`, resulted in `this` being referenced to `person`. If there is no dot operator, `this` will usually refer to the global object.

Note that this is just a hack and not a rule.

### Binding of arrow functions

Unlike vanilla functions, where binding of `this` changes according to where the code is defined _lexically_ and not the definition itself, the binding in arrow function remains the same everywhere.

Let's consider the previous code with arrow function:

```javascript
let person = {
  name: "Sally",
  getName: () => this.name;
}

let name = "Sergie";

person.getName();
// "Sergie"

let foo = person.getName;

foo();
// "Sergie"
```

Thus, in both the cases, the arrow function referrenced to the global object with `this`. In the case of arrow function, the `this` binding does'nt change. Another hack to check where does the `this` object of the arrow function points to, is to observe what would be the value of `this` just before declaring the arrow function.

```javascript
let object = {
  whatsThis: this,
  getThisNew: () => this,
  getThisOld: function () {
    return this;
  },
};

object.whatsThis();
// global

object.getThisNew();
// global

object.getThisOld();
// object
```

Let's test what we know so far in the case of ES6 classes. Note that unlike objects where `this` refers does not refer to the object itself, in classes it does refer to the instance of the class.

```javascript
class Fruit {
  constructor(name) {
    this.name = name;
  }
  getNameOld() {
    return this.name;
  }
  getNameNew = () => this.name;
}

// global variable
let name = "Sally";

let apple = new Fruit("Apple");

apple.getNameNew();
// "Apple"

apple.getNameOld();
// "Apple"

// Now let's make two new functions:
let foo = apple.getNameOld;
let bar = apple.getNameNew;

foo();
// "Sally"

bar();
// "Apple"
```

Notice how `foo` returned `"Sally"` as it got _binded_ to the global object while `bar` got binded to the `apple` object and returned `"Apple"`.

Thus in summary, vanilla functions follow the _dot_ operator "hack" while the arrow functions stay _binded_ to the value of `this` that was there just before the function was defined. This binding stays even if the function is re-declared unlike the vanilla flavour.
