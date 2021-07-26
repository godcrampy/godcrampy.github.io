+++
author = "Sahil Bondre"
title = "The Secret of Hoisting in JavaScript"
date = "2019-08-26"
description = "The Secret of Hoisting in JavaScript"
tags = [
    "javascript",
    "tutorial"
]
+++

Hoisting is one of the most confused about concept of JavaScript. It's one of the things that makes people think JavaScript as a nonsensical language. But once you know what's happening under the hood, everything makes perfect sense.

## Inside the Engine

JavaScript is an _Interpreted_ language. This means that the JavaScript Engine runs the code line by line by converting it to machine code (machine code is binary code that the computer can understand). Similar to JavaScript, Python and Perl too are interpreted languages. But what makes JavaScript different from these programming language is _hoisting_.

Try to guess the output of the following code:

```javascript
console.log(a)

// Some other code

var a = 5;
```

If you guessed 5, you are wrong.

If you guessed to get an Error then you are wrong too!

The actual output of the above is _undefined_! Weird isn't it? It all makes sense when hoisting makes sense. So let's make some sense out of it.

### Interpreting of JavaScript

So we already know that JavaScript is _interpreted_ line by line. Well, there are a few complications in that too. It helps to think that the JS engine goes thru your code line by line _twice_. First time, the engine goes thru the code and does the hoisting and some other things (like adding the missing semicolons). The second time it actually runs the code.

So, _Hoisting_ is the process of setting up of memory space for our variables and functions. Before the code starts to execute, the JS engine goes thru the code and sets up blocks of memory for functions and variables. The values of variables are not stored but functions are stored entirely along with their definitions. It's like the engine writes on a piece of paper the variables and functions it needs to keep track of before actually running the code.

Let's put our understanding to the test:

**Our previous example:**

```javascript
console.log(a)

// Some other code

var a = 5;

```

So when our engine goes thru our code first, it "writes" down on a piece of paper (metaphor for reserving memory block for the variable). The engine doesn't assign any value to the variables so it sticks with the value of _undefined_ by default. So after this _hoisting_ is done on our imaginary piece of paper (memory), the engine starts all over again to execute the code this time. So on the first line it encounters the variable _a_. It then looks into its paper reference (memory). Oh! _a_ is defined, it thus prints the value which is _undefined_ right now. Then on the next line, _a_ is reassigned the value of 5.

**Let's try another one:**

```javascript
b();

function b() {
  console.log('b called!');
}
```

Note that when _hoisting_ is being done, the variables are stored with the value of _undefined_ only whereas the functions are stored with their definitions too. So after going thru the code once, the engine knows what variables are there but not their values. It also knows what functions are there and what each of them does. Hence in the above example, when we call _b_, the engine already knows that there exists such a function and what this function does too. So we get the output as _b called!_.

**Last one:**

```javascript
b();
console.log(a);


function b() {
  console.log('b called!');
}
```

This one is tricky one as there's one small thing you might skip over. Here, since _a_ is not defined, we get an error. There is another interesting thing we notice on running this code. Let's walk thru step by step using our knowledge of _hoisting_. So in the first pass, the function _b_ along with its definition get _hoisted_ and stored in the memory. Now comes the second pass. On seeing the first line, the interpreter will call the function _b_ and we will get _b called!_ on our screen. After this on the next line we will get an error as _a_ is not defined. It's important to note here that the code above the erroneous line will be executed and the output will be shown too. This highlights the very important feature of JavaScript being an interpreted language.

Thus in conclusion note the following things:

* Unlike other languages, JavaScript doesn't give errors for calling variables and functions before declaration
* The functions get executed in their entirety while the variables return as undefined until they are reassigned some value.

## ES6 features

No JavaScript blog is complete without a word on the ES6 features. ES6 introduced two new keywords _let_ and _const_ for declaring variables. Variables declared using let and const are also hoisted but the only difference is that in  the case of let/const, the variables are not initialized with _undefined_ as in the case of var. The below code will throw a reference error as the variable _a_ is in the _temporal dead zone_. If it was not hoisted then the value of _a_ would have been 10.

```javascript
a = 10;

console.log(a);
// Reference Error

let a = 5;
```

> That's all folks! Thank You for reading and have a marvelous day 😄
