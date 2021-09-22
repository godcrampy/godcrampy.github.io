+++
author = "Sahil Bondre"
title = "System Design Notes"
date = "2020-08-21"
description = "The Missing Shell Scripting Crash Course"
tags = ["tutorial", "design"]
draft = true
+++

## Tiers of Software Architecture

### Single Tier Application

In this type of architecture, the UI, business logic and the database all reside on the same hardware (client). This is generally used in mobile and desktop applications like MS Word, Contacts app etc. There is no network latency or web security issues. The performance of the application depends on the hardware running the software. One major problem is deploying software patches, and updates as the users have to update the software manually.

### Two-Tier Application

There are just two components in this type: UI (Client) and Database (Server). The business logic is embedded inside the client. Although this is easier to implement than three-tier architectures (see next), the major problem is that all the users' data are exposed to the client. There is not much data security that this architecture provides. This architecture is used when there is not much at stake from the data security point of view. Since the database is no longer on the same client hardware, _network latency_ plays a role in the application's overall performance. Examples: To-Do List, Simple Online Games.

The client in two-tier design is called a _thick client_ as it does the heavy lifting of executing business logic.

### Three-Tier Application

In this architecture, the business logic is moved to a separate backend server. The client sends a request to the backend server, which then processes the request (accesses the database) and sends back the response. This ensures that the entire application's data is no longer exposed to the client, which leads to more secure applications.

The client in three-tier design is called _thin client_ as the business logic responsibility is delegated to a dedicated server.

### N-Tier Application

N Tier applications use more than three components. Components like caching, load balancers, message queues, micro services etc are used the build and deploy applications with complex business requirements and large user base. By having multiple components we leverage on the following two design patterns of Software Design:

- **Single Responsibility Principle:** Each component performs just a single task functionality wise. Each component has just _one reason to change_.
- **Separation of Concerns:** Components are loosely coupled with each other with each component implementing _single feature_.

[More on difference between the two](https://stackoverflow.com/a/1724489)
