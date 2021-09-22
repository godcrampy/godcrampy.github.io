+++
author = "Sahil Bondre"
title = "Deep Dive into Object Oriented Programming: Part 1"
date = "2021-09-22"
description = "Deep Dive into Object Oriented Programming: Part 1"
tags = ["tutorial", "oop", "java"]
+++

## Introduction

In this series of posts, We are going to explore object-oriented programming. We'll start with a few basic concepts, then build upon them, trying to dig more and more into the depths of object-oriented programming.
Object-oriented programming is one of the three popular paradigms of programming. The other being functional and procedural programming.

**Procedural programming** is based on making procedure calls. A procedure contains a series of instructions that need to be executed. Procedures are also commonly referred to as functions or routines. In procedural programming, we write a list of instructions to tell the computer what to do line by line.

**Functional programming** treats computation as a series of mathematical functions. Each function takes in data, does some computation and returns some data. A key idea in this paradigm is that state and data should be immutable. Thinking of computer programs as mathematical functions are quite an exciting idea; we'll save it for another post!

Finally, **object-oriented programming** tries to map real-world objects into the software. Using object-oriented programming, we can model the properties and the functions of things that appear in our natural world and simulate them in our computer programs.

## Class vs Object

OOP boils down to emulating real-world things in our code. Every real-world item has some properties and a few things it can perform. Let's say we want to model a car in our code. Let's consider a few properties of a car:

- What is its name? `String`
- What is its colour? `String`
- How many people can it accommodate? `Integer`
- How much fuel is there in the car currently? `Integer`
- How much distance has it travelled so far? `Integer`

Let's also assume that the car can perform some essential functions like:

- Start the engine
- Refuel the tank
- Drive a certain distance etc.

Now we'll model our car in code. We need to define a class like a blueprint describing all these car characteristics to the programming language.

### Defining the Class

```java
package com.godcrampy.oop_deep_dive;

public class Car {
    String name;
    String color;
    Integer peopleCapacity;
    Integer fuelLeft;
    Integer distanceTravelled;

    public Car(String name, String color, Integer peopleCapacity) {
        this.name = name;
        this.color = color;
        this.peopleCapacity = peopleCapacity;
        this.fuelLeft = 100;
        this.distanceTravelled = 0;
    }

    void startEngine() {
        System.out.println("Starting Engine!");
    }

    void refuelTank(int fuel) {
        fuelLeft += fuel;
    }

    void drive(int distance) {
        System.out.println("Driving...");
        distanceTravelled += distance;
    }
}
```

Let's break the code down piece by piece:

#### Members

```java
    String name;
    String color;
    Integer peopleCapacity;
    Integer fuelLeft;
    Integer distanceTravelled;
```

These are known as the members of the class. Imagine them to be variables of the class. When we make a new car, every car object will get its own copy of these variables. I've defined them as either `String` or `Integer` as per the property of the car that they represent.

#### Methods

```java
    void startEngine() {
        System.out.println("Starting Engine!");
    }

    void refuelTank(int fuel) {
        fuelLeft += fuel;
    }

    void drive(int distance) {
        System.out.println("Driving...");
        distanceTravelled += distance;
    }
```

These are the methods that we've defined to imitate various functions of a real-world car. `startEngine` imitates the starting of the engine by printing to the console. `refuelTank` takes in an Integer and increases the `fuelLeft` member of the class by that amount. The same goes for the `drive` method that increases the `distanceTravelled` member and prints out a message on the console.

#### Constructor

```java
    public Car(String name, String color, Integer peopleCapacity) {
        this.name = name;
        this.color = color;
        this.peopleCapacity = peopleCapacity;
        this.fuelLeft = 100;
        this.distanceTravelled = 0;
    }
```

This is a unique method of the class called the constructor. Ignore the `public` keyword; we'll get back to it later. Notice that it has the same name as the class. Also, notice that we don't specify any return type (like `void` or `int`). The blueprint class tells Java about something known as a `Car`, but it does not create a car for us. When we make a car, we need to invoke the constructor method. So essentially, the constructor is the first method that is called when we create a car from the class.

Have a look at the bunch of `this` keyword here. The constructor has three parameters `name`, `color` and `peopleCapacity`. We use these to set the initial values of our own members in the class. Now to distinguish between the `name` of our class and `name` of the constructor, we use th`is` keyword. The parameter `name` belongs to the function scope and just writing `name` points to the parameter. To access the member `name`, we use `this.name` as it is in the outer scope of the class. Now let's actually make a car object from the class that we have defined over here.

### Creating the Object

```java
package com.godcrampy.oop_deep_dive;

public class Main {
    public static void main(String[] args) {
        Car honda = new Car("Honda", "Red", 4);

        honda.startEngine();

        System.out.println(honda.fuelLeft);
        honda.refuelTank(100);
        System.out.println(honda.fuelLeft);
    }
}
```

**Output:**

```markdown
Starting Engine!
100
200
```

Let's step through the code line by line and see what's happening:

```java
Car honda = new Car("Honda", "Red", 4);
```

We use the `new` keyword to instantiate an object from a class. The `Car` in `Car honda =` refers to the type of the variable `honda`. The `Car` in `new Car(...)` is a call to the constructor. Observe the parameters we are passing are precisely the same as the constructor above expects. This runs the code in the constructor and sets the members accordingly.

```java
honda.startEngine();
```

Here we are calling the `startEngine` method of the `Car`. We use `.` operator to access members and methods of the object. This, in turn, runs the imaginary code to start our car's engine and prints "Starting Engine!" on our console.

```java
System.out.println(honda.fuelLeft);
```

Here we are accessing the value of the`fuelLeft` variable of the car and printing it out.

```java
honda.refuelTank(100);
System.out.println(honda.fuelLeft);
```

The `refuelTank` function increases the `fuelLeft` of the `honda` car, and on the following line, when we print it again, we can see the final value to be `200`.

## What did we discover?

We have now established the basics of Object-oriented programming. Let's take a step back and analyze the consequences of what we have discovered so far. In procedural programming, we used to pass data into procedures to performs computations. In this paradigm, the data itself can perform operations on itself. The Car class has all its properties built-in and knows all the tasks it is supposed to serve. This new way of thinking about programs has its own advantages and disadvantages:

#### Advantages:

1. Classes are logically a layer of abstraction above writing simple procedures. This makes it easier to write complex software.
2. It's easier to write and maintain code (open to debate :P)
3. Object-oriented code has a reasonable degree of reusability. The standard library of Java is a beautiful example of this.

#### Disadvantages:

1. Look at the lines of code we wrote and what we printed out. A large number of lines of code is required to set up things and bootstrap even the most straightforward programs.
2. Computer hardware still executes code pretty much in a procedural way, line by line. Object-oriented code runs a bit slower as it requires extra processing layers before it reaches the silicon level.

That wraps it up for the post. We laid the foundation to build upon even more object-oriented programming concepts in the upcoming stream of posts. You can find the code mentioned in the post here: https://github.com/godcrampy/oop-deep-dive-notes
