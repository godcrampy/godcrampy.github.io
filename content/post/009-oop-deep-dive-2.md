+++
author = "Sahil Bondre"
title = "Deep Dive into Object Oriented Programming: Part 2"
date = "2021-09-23"
description = "Deep Dive into Object Oriented Programming: Part 2"
tags = ["tutorial", "oop", "java"]
+++

In the [last post](/post/008-oop-deep-dive-1/), we started with the basics of Object-Oriented Programming. We made our first class. Added some members and methods to it and initialized an object of the Car class. It's time to dive deeper now.

Earlier, we had defined a `refuelTank` method to increase the fuel in our car. Now when I have a car object with me, no one stops me from changing the `fuelLeft` value without using the `refuelTank` method. I can directly access the member using the dot operator and change its value:

```java
car.fuelLeft = 500;
```

In the real-life, I cannot magically change the fuel in my car. That's against the laws of physics. But apparently, I can do that in the software version of my car. To solve this, we'll introduce access modifiers.

## Access Modifiers

Java has three keywords to solve this problem: `public`, `private` and `protected`. When something is `public`, everyone can access it. When something is `private`, it can only be accessed internally. We'll talk about `protected` in some time.

To prevent someone from magically changing the `fuelLeft` member, we'll add the `private` keyword before its definition in the class. This will prevent it from being accessed using the dot operator.

```java
// Car.java
private Integer fuelLeft;

```

But this creates a different problem. In our `main` method, we used the `fuelLeft` member to print the value. Not to magically change the value but just to have a look at its value.

```java
//Main.java

// ERROR!
System.out.println(honda.fuelLeft);
honda.refuelTank(100);
System.out.println(honda.fuelLeft);

```

Running the above code will give us an error. To preserve the functionality to be able to view the data, we'll create a "getter" method in the Car class:

```java
// Car.java

int getFuelLeft() {
	return fuelLeft;
}
```

Since this method belongs to and is "inside" the class, it can access the private members. So it just takes the value and returns it. Now we can refactor our main function code to use this method instead of the member:

```java
System.out.println(honda.getFuelLeft());
honda.refuelTank(100);
System.out.println(honda.getFuelLeft());
```

And voila! Everything works as before with additional security of not changing the `fuelLeft` member magically.

### Refactoring Other Members

If you think about it, all the other members of the Car class should be private by the same argument of not changing their value manually. Let's make all of them private and add getter functions to them:

```java
public class Car {
    private String name;
    private String color;
    private Integer peopleCapacity;
    private Integer fuelLeft;
    private Integer distanceTravelled;

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public Integer getPeopleCapacity() {
        return peopleCapacity;
    }

    public Integer getFuelLeft() {
        return fuelLeft;
    }

    public Integer getDistanceTravelled() {
        return distanceTravelled;
    }
	// other methods...
}
```

### Access of methods

Just like members, we can add access modifiers to our class methods as well. If a class method is `private`, it cannot be called using the dot operator in the object. It can only be used internally by other methods inside the class. And that is the reason we had

In the last post, we defined our constructor as `public`. Now let's make sense of it. Our constructor needs to be accessible from anywhere to initialize the object from the class. Hence, we made it `public`. Let's now define a `private` method. When we start the engine, the car also checks if all the systems are working in proper condition. Let's call this method `checkSystems`. This method shouldn't be used by the car user but just called internally by the `startEngine` method.

```java
// Car.java

private void checkSystems() {
	System.out.println("Checking Systems...");
}

void startEngine() {
	checkSystems();
	System.out.println("Starting Engine!");
}
```

Now when we call `startEngine` on the car object from the main method, it'll print "Checking Systems..." too. However, we cannot access the `checkSystems` method externally:

```java
// Main.java

// ERROR
car.checkSystems();
```

Now you may wonder, earlier all members and methods in the `Car` class were neither public nor private; still we could access them. Why is that? If nothing is mentioned, does java make them public by default? The short answer is not really. Let's take a step back and understand what packages are in java.

## Packages

Packages in java are used to group similar classes (and sub-packages) together. At the start of each java class, we mention the package name:

```java
package com.godcrampy.oop_deep_dive;
```

Conventionally, to avoid naming collisions, companies use reverse domain names as a prefix for the package name. So if let's say if a company has its domain as `example.com` and is developing a utility for helpful string operations, it may name it as `com.example.string_util`. Packages can contain sub-packages too. So, suppose the string operations utility has a section for generating random names. In that case, it could be in a package called `com.example.string_util.random_name`.

All the class files are structured in directories according to the package name. For example, let's consider the java project that I am using for this tutorial. I have defined the package name as `com.godcrampy.oop_deep_dive`. All the source code for my project is in the `src/main` folder of the repository with the following structure:

```
    └── src
        └── main
            └── java
                └── com
                    └── godcrampy
                        └── oop_deep_dive
                            ├── Car.java
                            └── Main.java

```

Now let's move our `Car` class to a subpackage called `vehicle`. To do this, I created a new directory called `vehicle` and moved the class there:

```
└── src
    └── main
        └── java
            └── com
                └── godcrampy
                    └── oop_deep_dive
                        ├── Main.java
                        └── vehicle
                            └── Car.java

```

Now we need to update the package declarations of our Car class. So I change the first line of the Car class from `package com.godcrampy.oop_deep_dive;` to `package com.godcrampy.oop_deep_dive.vehicle;`

Now, if you are coding along with this tutorial, you may notice that your IDE has already started showing some errors. `honda.startEngine`, `honda.refuelTank` and `honda.drive` methods are not accessible in the `main` function.

For these methods, we didn't add the `public` or `private` keywords. So when a member or method has no access modifier specified, it gets the `default` access. This means that they can be accessed in some other class only if both the classes are in the same package. In our example, both `Main` and `Car` classes were in `com.godcrampy.oop_deep_dive` package. So everything worked fine before. So when we moved `Car` to `com.godcrampy.oop_deep_dive.vehicle` package, all the default methods became inaccessible.

## Fixing the defaults

To fix this, I'll make all the default methods in our car class `public`. So finally, the Car class looks like this:

```java
package com.godcrampy.oop_deep_dive.vehicle;

public class Car {
    private String name;
    private String color;
    private Integer peopleCapacity;
    private Integer fuelLeft;
    private Integer distanceTravelled;

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public Integer getPeopleCapacity() {
        return peopleCapacity;
    }

    public Integer getFuelLeft() {
        return fuelLeft;
    }

    public Integer getDistanceTravelled() {
        return distanceTravelled;
    }

    public Car(String name, String color, Integer peopleCapacity) {
        this.name = name;
        this.color = color;
        this.peopleCapacity = peopleCapacity;
        this.fuelLeft = 100;
        this.distanceTravelled = 0;
    }

    private void checkSystems() {
        System.out.println("Checking Systems...");
    }

    public void startEngine() {
        checkSystems();
        System.out.println("Starting Engine!");
    }

    public void refuelTank(int fuel) {
        fuelLeft += fuel;
    }

    public void drive(int distance) {
        System.out.println("Driving...");
        distanceTravelled += distance;
    }
}
```

Now all the errors are gone, and we are good to go. If you notice, at the start of the class as well, we added the public keyword: `public class Car {`. This follows from the same access rules as we discussed before.

**In summary:**

| Acess Modifier | Within Class | Within Package | Outside Package |
|----------------|--------------|----------------|-----------------|
| Private        | Y            | N              | N               |
| Default        | Y            | Y              | N               |
| Public         | Y            | Y              | Y               |
| Protected      | ?            | ?              | ?               |


The `protected` keyword is still to be investigated. We will do that in the next post.
That wraps it up for the post. We understood what access modifiers are and how they can be used to improve the security of our code. We also explored packages in java and how to organise our code. You can find the code mentioned in the post here: https://github.com/godcrampy/oop-deep-dive-notes

