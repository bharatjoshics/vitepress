# VUEX
Vuex is used for better state management solution which can replace 'provide and inject' for data which you wanna share across multiple components posibbly entire app.

## What is Vuex?
Vuex is a library for managing global state.

## What is State?
State could simply be translated with data. Data your application needs and data that affects what the user sees on the screen.

## Types of State
There are two types of states -

- Local State
- Global State

### Local State
Local state is the state the data you manage inside of one component which only affects this one component and possibly, indirectly through props, also a child component.

Example - A button that shows or hides some container.

### Global State 
Global state is the state data that affects multiple components, possibly the entire app. So, data which you need in a lot of different places. 

Example - User Authentication Status (whether a user is logged in or not)

## With Vuex
- Outsourced state management
- Predictable state management / flow
- Clearly defined data flow (Less Error)