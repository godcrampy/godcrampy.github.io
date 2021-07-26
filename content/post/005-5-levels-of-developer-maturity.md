+++
author = "Sahil Bondre"
title = "The 5 Levels of Developer Maturity"
date = "2020-03-21"
description = "The 5 Levels of Developer Maturity"
tags = [
    "opinion",
]
+++

I was watching a [talk](https://www.youtube.com/watch?v=sSm2dRarhPo) on Microservices by Chris Richardson on Youtube the other day. He was talking about the design patterns of Microservices in DevOps and how the software world is moving from a sluggish monolith architecture to an agile container-based architecture. I am not a DevOps person, but there's good reason to watch these talks. I'd suggest you should too. And the reason is that DevOps has the job of delivering software fast and efficiently. But their vocabulary is entirely different from us devs. They have a birds-eye view of how their fellow developer comrades design software. We, as developers, discuss ideas like test-driven development, design patterns and code smell to convey good software practices.It helps to examine what DevOps people talk about and think about their thoughts on good software.

The notion of microservices forces organisations to divide into small independent teams of a handful of developers. It implements [separation of concerns on developers](https://en.wikipedia.org/wiki/Separation_of_concerns), not just code. The best part is that it brings more order and rigour and at the same time, enhances the autonomy and independence of devs and dev teams. This whole paradigm of thinking about software from the bird's eye view without domain-specific jargons got me thinking. What does it mean to write excellent and mature software? And how do we advance towards the penultimate level of the utmost agile software development?

I've devised a model that divides the maturity of the developer into levels. I must caution you that this scale is not linear. The higher up you are on this scale, the more challenging it is to move to the next level. Nevertheless, let's begin with your first day in writing software.

## Level 0: The Beginner

You belong to this level if you are on your first week or month of learning to code. You are learning your first programming language and notions of loops and conditionals. You are excited by the fact that you can tell the computer what to do and it does precisely that. In this stage, you have just one goal, and that is to make something useful. You have no idea about what good coding habits are. To write _good_ code, you must be able to write code in the first place. And you focus on just that. In this level, all you focus is on **developing** something and nothing else.

## Level 1: The Student

You enter this phase after you get comfortable with some language and are looking forward to doing some real-life projects. You are probably reading your first programming book or taking your first programming course. You also learn about git and version control. You can develop small programs quickly. You start uploading your code on Github and hope that people and someday employers will have a look at projects. You begin writing Readmes to help other people understand what the project is and how to run it on their machine. Now, apart from the **development**, you care about **documentation** as well.

## Level 2: The Programmer

You have a few projects under your belt that you are proud of. Github is now your favourite website. You start stalking other developers and their projects there. You learn about the open-source world. You learn some more git and start forking and cloning other people's projects. You want to contribute and be a part of this community. You start running your favourite libraries locally and tinkering with them. Few patterns emerge. There's something known as tests that every good repo has in it. You explore more and keep exploring. You realise that to write good software its necessary to write tests as well. You want to look professional as well. So you start writing small tests for your projects. You are evolving as a developer and have entered your developer adulthood. So your typical project workflow involves **development**, **testing** and **documentation**.

## Level 3: The Software Developer

You are technically a professional now. You are probably earning money by writing code. You realise languages are mere tools. You are not scared of reading documentation, and stack overflow is this best thing on earth. You are forming your own opinions: tabs vs spaces, vim vs emacs or how such comparisons are dubious. You start learning agile practices and design patterns. You start caring about how to write code which is understood not just by machines but as well. You learn about test-driven development or TDD. You realise that the order in which development, testing and documentation are done matters as well. You understand that your order is wrong. So now you write **tests** first, then **code** and then write **documentation**.

## Level 4: The Software Engineer

You have a few years of expertise in programming now. You call yourself a software engineer or software architect. You have started reflecting philosophically about the software industry. You think about the implications of your code on society. Your vocabulary is full of jargons now: Scalability, System Architecture, Software Economy. And slowly everything starts making sense. All your life, you have been doing it wrong!

In the book Start with Why, Simon Sinek presents an idea explaining what separates the absolute best from the good enough. He justifies why companies like Apple and Nike are miles ahead of their competitors. His theory is about the entirely reversed way of thinking that these companies have. He argues that ordinary companies think about what they do. A few think about how they do it. And fewer rare ones think about why they do it.

On the other hand companies like Apple and Nike start with why first. They try to find what the principles they believe in are. Then they come to how and what. For such companies, their products are just by-products. People buy their goods because of what they stand for.
This notion of taking a step back and ultimately reversing the way of approaching something works beautifully in software as well.
Good programmers are the ones who write code, tests and then documentation.

Great programmers have the exact reverse approach. They'll first write their **specification or documentation**. Then they'll write **tests** for their code. And finally, they'll write some **code**.  This approach enables us to focus more on the problem than the solution.
> Problem Solvers Focus on the Problem, Not the Solution.
