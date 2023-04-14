---
title: User Role
date: '2023-04-04'
tags: ['CMMS', 'scope', 'features', 'user']
draft: false
summary: User Authentication and Authorization
---

`User` is person operate CMMS system. Prior operate, user shall:

- Registration
- Login/Logout

And `authenticated` user has `authorize` with following role :

- ## Executor Department:

  - Manager

    - Approve Work orders
    - Perform User Registration
    - Perform Equipment Registration
    - Perform Equipment Part list
    - Perform spare parts registration

  - Technician

    - Carry out planning work orders
    - Performing WO Completions
    - Doing Completion PM
    - Perform Equipment Registration
    - Perform PM Setup
    - Do spare parts registration
    - Perform spare parts transactions

- ## Originator Department :

  - Level Manager, Supervisor

    - Doing Approve Work orders
    - Perform Equipment Registration

  - Operator Levels

    - Doing Requisition Work orders
    - Doing Close WOs
    - Perform Equipment designed to manage plant maintenance activities.

- ## `User Class Relationship Diagram`

![User Class Diagram][user]

[user]: /static/images/classDiagram/userDiagram.jpg
