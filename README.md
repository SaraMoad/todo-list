# Todo App

## Summary

Create a backend with Spring that can create, update, read and delete todos from a MySQL database. Along with this create a frontend application with React that interacts with this backend.

## Example UI

![UI Example](todo_app.png)

## Frontend MVP

- Ability to add, complete, delete and edit todos
  Services File
- Typescript & testing with React Test Library
- All errors must be handled and passed on properly back to the user (toast notifications are a good way of doing this)
  : implement the toast notification I built with mitch.
- Must look polished, there is an example image attached to this spec and there are hundreds of examples of good looking todo apps online

## Backend MVP

- All endpoints must be error handled such that they return the correct status codes and messages.
- Implement a logging strategy for requests being processed (there are loads of recourse you can find via google to do this)
- Use spring swagger to generate documentation for your API

Table categories:
TaskName = String
TaskDescription = String;
Length of Time = String
Priority = String;
Due Date: new Date.

http://localhost:8080/swagger-ui/index.html#/

Title {Replace with the project title}
{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: Github Workflow Badges}

Demo & Snippets
Include hosted link
Include images of app if CLI or Client App
Requirements / Purpose
MVP
purpose of project
stack used and why
Build Steps
how to build / run project
use proper code snippets if there are any commands to run
Design Goals / Approach
Design goals
why did you implement this the way you did?
Features
What features does the project have?
list them...
Known issues
Remaining bugs, things that have been left unfixed
Features that are buggy / flimsy
Future Goals
What are the immediate features you'd add given more time
Change logs
Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.
13/02/2022 - {Theme of changes if applicable}
Extended the expiry time of JWT tokens on the backend
Added users to cohort response payload
Centralized API base URL on frontend using the proxy package.json property
What did you struggle with?
What? Why? How?
Licensing Details
What type of license are you releasing this under?
Further details, related projects, reimplementations
Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
If it's an API, is there a client app that works with this project? link it
