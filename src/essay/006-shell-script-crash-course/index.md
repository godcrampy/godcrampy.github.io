[[toc]]

_Bash_ is a [shell](<https://en.wikipedia.org/wiki/Shell_(computing)>) and a [command language](https://en.wikipedia.org/wiki/Command_language). You can use it like any other language to write scripts. Bash scripts can run on Linux and Mac right off. For Windows, there's a small [workout](https://stackoverflow.com/questions/6413377/is-there-a-way-to-run-bash-scripts-on-windows) to be done. In this tutorial I'll be going over _Shell Syntax_ and not _Shell Commands_ like `ls`, `grep`, `cat`.

This crash-course will teach you all the necessary stuff you need to get up and running with writing shell scripts.

## Hello World

All you need in this tutorial is your terminal and a text editor. Let's write a simple hello world in bash. Create a new file called `script.sh` and write the following code:

```bash
#!/bin/bash

echo "Hello World"
```

Now save this file. To make this executable, run `chmod +x ./script.sh` in your terminal. Then you can run the above script using `./script.sh` in your terminal.

```bash
Hello World
```

Tah Dah! Your first bash script. Let's examine the code closely. The first line `#!/bin/bash` is called a [_shebang_](<https://en.wikipedia.org/wiki/Shebang_(Unix)>). It tells your computer which program to give this code to run. In our case, it is `/bin/bash`.
If you wanted to write _javascript_ instead of _bash_ you could write the following code.

```js
#!/bin/node

console.log("Hello Javascript")'
```

```bash
$ ./script.sh
Hello Javascript
```

The above code will work only if you have node installed in `/bin/` directory. So essentially you can write code in any language. All you need to do is specify which _program_ can handle that code and your system will pass on that file to that program.

Let's hop back to bash now. In the above code, the second line is `echo "Hello World"`. `echo` is a _command_ which prints stuff to the [Standard Output](<https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)>) which is the terminal in our case.

## Variables

Let's modify the above code a little bit.

```bash
#!/bin/bash

name="Bash"

echo "Hello, $name"
```

```bash
$ ./script.sh
Hello, Bash
```

We create a variable called `name` and store the string `"Bash"` to it. Then to access it, we need to reference it with `$`. If you forget the `$` sign, bash will treat `name` as a string literal, and you'll get `Hello name` as output instead.

Note that there are no spaces around the `=` while defining a variable. Also, use _double quotes_ while referencing.

## User Input

Let's continue modifying our script. We'll request the user for their name and then greet them back.

```bash
#!/bin/bash

read -p "What is you name: " name

echo "Hello $name"
```

```bash
$ ./script.sh
What is you name: godcrampy
Hello godcrampy
```

The `read` command takes in one line of input from the [Standard Input](<https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)>) and saves it to the variable `name`. The `-p` flag allows us to pass a prompt of `"What is your name: "` before taking in the input.

One neat trick to reference variables in a string is to use curly braces:

```bash
#!/bin/bash

read -p "Enter an action: " verb

echo "You are ${verb}ing"
```

```bash
$ ./script.sh
Enter an action: cook
You are cooking
```

## Comments

```bash
# Comments start with hash
```

[Multiline Comments](https://unix.stackexchange.com/questions/37411/multiline-shell-script-comments-how-does-this-work) are a bit of a complicated mess.

## Arguments

`$1`, `$2` and so on, store the arguments passed into the script. `$0` stores the file name.

```bash
#!/bin/bash

echo $0
echo $1
echo $2
echo "${@}" # Access all the arguments [More on this later]
```

```bash
$ ./script.sh first second
./script.sh
first
second
first second
```

## Expressions

There are 3 common expressions: return values, arithmetic evaluation and `test` command. All three of these return either a true or false value.

**Return Values**
This is literally the return value of programs like `grep`, `find`.

**Arithmetic Evaluation**
Bash uses a parenthesis to denote arithmetic expressions.
Example: `(( 1 <= 5))`

**`Test` Command**
The `test` command often denoted by `[` or `[[` can carry out more complex operations:

```bash
[[ -e "$file" ]] # True if file exists
[[ -d "$file" ]] # True if file exists and is a directory
[[ -f "$file" ]] # True if file exists and is a regular file
[[ -z "$str" ]]  # True if string is of length zero
[[ -n "$str" ]]  # True is string is not of length zero

# Compare Strings
[[ "$str1" == "$str2" ]]
[[ "$str1" != "$str2" ]]

# Integer Comparisions
[[ "$int1" -eq "$int2" ]] # $int1 == $int2
[[ "$int1" -ne "$int2" ]] # $int1 != $int2
[[ "$int1" -gt "$int2" ]] # $int1 > $int2
[[ "$int1" -lt "$int2" ]] # $int1 < $int2
[[ "$int1" -ge "$int2" ]] # $int1 >= $int2
[[ "$int1" -le "$int2" ]] # $int1 <= $int2
```

Note that `[` is actually a command. Try running `$ where [`.
`test`, `[` and `[[` are almost similar. There are a few [subtle differences](http://mywiki.wooledge.org/BashFAQ/031).

**And & Or**

```bash
[[ ... ]] && [[ ... ]] # And
[[ ... ]] || [[ ... ]] # Or
```

## Conditionals

Now since we know, expressions let's use them in conditional statements.

```bash
# 1. Return values

# If notes.md file doesn't exist, create one and
# add the text "created by bash"
if find notes.md
then
  echo "notes.md file already exists"
else
  echo "created by bash" | cat >> notes.md
fi
```

```bash
# 2. Arithmetic Evaluations
read -p "Enter your age: " age

if (( "$age" > 18 ))
then
  echo "Adult!"
elif (( "$age" > 12 ))
then
  echo "Teen!"
else
  echo "Kid"
fi
```

```bash
# 3. Test Expressions
# Check if argument was passed
# "$1" corresponds to first argument
if [[ -n "$1" ]]
then
  echo "Your first argument was $1"
else
  echo "No Arguments passed"
fi
```

The `if` statement has to end with `fi`.

If you are keen enough, you might wonder why I am using `"$var"` and not `$var` to reference the variables. Here's your [answer](https://stackoverflow.com/questions/10067266/when-to-wrap-quotes-around-a-shell-variable). (Hint: Both work but double quotes are safer).

## Looping

```bash
# print numbers 1 to 10

# c like for loop
for (( i = 1; i <= 10; ++i ))
do
  echo "$i"
done

# for in
for i in {1..10}
do
  echo "$i"
done

# while
i=1
while [[ "$i" -le 10 ]]
do
  echo "$i"
  ((i++))
done

# until
i=1
until [[ "$i" -eq 11 ]]
do
  echo "unitl $i"
  ((i++))
done
```

**Iterating over arrays**
Arrays are declared using parenthesis without commas between elements. More on arrays later on.

```bash
arr=(a b c d)

# For in
for i in "${arr[@]}"
do
  echo "$i"
done

# c like for
for (( i = 0; i < "${#arr[@]}"; i++))
do
  echo "${arr[$i]}"
done

# while
i=0
while [[ "$i" -le "${#arr[@]}" ]]
do
  echo "${arr[$i]}"
  (( i++ ))
done
```

`${arr[@]}` allows you to iterate over an array while `${#arr[@]}` returns the length of the array.

**Iterating over arguments**
`@` holds all the arguments passed in to the script

```bash
for i in "$@"
do
  echo "$i"
done
```

> `continue` and `break` work the same way as in other programming languages. `continue` skips the current iteration. `break` quits the loop.

## Arrays

Arrays in bash are defined with parenthesis with no commas separating the elements.

```bash
arr=(a b c d)
```

**Read**

```bash
echo "${arr[1]}"     # Single element
echo "${arr[-1]}"    # Last element
echo "${arr[@]:1}"   # Elements from 1
echo "${arr[@]:1:3}" # Elements from 1 to 3
```

**Insert**

```bash
arr[5]=e                            # direct address and insert/update
arr=(${arr[@]:0:1} new ${arr[@]:1}) # Adding 'new' to array
```

**Delete**

```bash
arr=(a b c d)
unset arr[1]
echo << "${arr[1]}" # Outputs nothing
```

Notice how once we delete the element at position 1, the following item does not take up its place. Once removing is done, we need to re-index the array.

```bash
arr=(a b c d)
unset arr[1]
arr=("${arr[@]}")
echo << "${arr[1]}" # c
```

## Functions

Functions in _bash_ have a kind of similar syntax as in other programming languages. Arguments to a function are accessed identically to the arguments to the script.

```bash
greet() {
  echo "Hello, $1"
}

greet Bash # Hello, Bash
```

The function definition does not specify any information of the arguments passed to it. Notice how while calling a function, parenthesis is not used. Instead, arguments are passed in separated by space.

All the arguments of a function can be accessed using `@`.

```bash
greet() {
  echo "Hello, ${@}"
}

greet every single body # Hello, every single body
```

And that's it for this crash course. You can now start writing your own shell scripts. There's more to be explored beyond what I have mentioned here.
