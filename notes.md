# React Learning Scheme of Work

> Goal: Learn React from beginner to intermediate level in 4 weeks.

---

# WEEK 1 — React Foundations

## Week Goal
Understand the fundamentals of React and how React applications are built.

---

## Day 1 — Introduction to React

### Topics
- What is React?  a javascript library to build web application ui and interfaces 
- developed by facebook and it is used by lots of organisation facebook, 
- Why React is used
- JSX (React components)  -- html coupled with javascript {}
- Virtual DOM  // 
- Single Page Applications (SPA)  // 
- Component-based architecture  // scalable

### Practice
- Install:
  - VS Code
  - Node.js  --  runtime javascript compiler  
  <!-- - https://nodejs.org/  --> install nodejs
  - vite app -- to install react
  <!-- - vite.dev -->
  <!-- npm create vite@latest -->
  <!-- - Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -->
- Understand React workflow

---

## Day 2 — React Setup

### Topics
- Installing React with Vite
- Understanding project structure
- Running development server

### Practice

```bash
npm create vite@latest
npm install
npm run dev
```

### Assignment
- Create your first React app

---

## Day 3 — JSX

### Topics
- What is JSX?
- JSX syntax rules
- Embedding JavaScript in JSX
- Expressions in JSX

### Practice
- Create JSX elements
- Display dynamic values

---

## Day 4 — Components

### Topics
- Functional components
- Reusable components
- Component structure
- Exporting/importing components

### Practice
Build:
- Header component
- Footer component
- Card component

---

## Day 5 — Props

### Topics
- Passing props
- Dynamic props
- Children props
- Reusable UI

### Practice
- Create reusable product cards

---

## Day 6 — State with useState

### Topics
- What is state?
- useState hook
- Updating state
- State rules

### Practice
Build:
- Counter app
- Toggle button
- Like button

---

## Day 7 — Mini Project

### Project
Build:
- Profile Card App

### Features
- Dynamic props
- State updates
- Reusable components

---

# WEEK 2 — Core React Concepts

## Week Goal
Learn interaction, rendering, forms, and hooks.

---

## Day 8 — Event Handling

### Topics
- onClick
- onChange
- Form events
- Event handlers

### Practice
- Interactive buttons
- Input tracking

---

## Day 9 — Conditional Rendering

### Topics
- if statements
- Ternary operators
- && rendering

### Practice
Build:
- Login/logout UI
- Theme switcher

---

## Day 10 — Lists & Keys

### Topics
- Rendering lists
- map()
- Keys in React

### Practice
- Product list rendering
- Dynamic cards

---

## Day 11 — Forms in React

### Topics
- Controlled components
- Form state
- Handling submissions

### Practice
Build:
- Registration form

---

## Day 12 — useEffect Hook

### Topics
- Side effects
- Dependency array
- Lifecycle behavior

### Practice
- Fetch API data
- Console side effects

---

## Day 13 — Styling React Apps

### Topics
- CSS in React
- CSS Modules
- Tailwind CSS basics
- Styled Components overview

### Practice
- Style components
- Build responsive UI

---

## Day 14 — Mini Project

### Project
Build:
- Todo App

### Features
- Add tasks
- Delete tasks
- Mark complete
- Dynamic rendering

---

# WEEK 3 — Routing, APIs & Advanced Hooks

## Week Goal
Learn navigation, APIs, and advanced React patterns.

---

## Day 15 — React Router

### Topics
- Installing React Router
- BrowserRouter
- Routes
- Route navigation

### Practice
- Multi-page application

---

## Day 16 — Dynamic Routes

### Topics
- Route parameters
- Nested routes
- 404 pages

### Practice
- Product details page

---

## Day 17 — API Integration

### Topics
- Fetch API
- Axios
- REST APIs
- Loading states
- Error handling

### Practice
Build:
- Weather App

---

## Day 18 — useRef Hook

### Topics
- Referencing DOM elements
- Persisting values

### Practice
- Auto focus input
- Stopwatch app

---

## Day 19 — useContext Hook

### Topics
- Context API
- Avoiding prop drilling
- Global state basics

### Practice
- Theme management app

---

## Day 20 — Custom Hooks

### Topics
- Reusable hook logic
- Creating custom hooks

### Practice
Build:
- useFetch hook

---

## Day 21 — Mini Project

### Project
Build:
- Movie Search App

### Features
- Search movies
- API integration
- Routing
- Responsive design

---

# WEEK 4 — Advanced React & Professional Development

## Week Goal
Learn scalable React development and deployment.

---

## Day 22 — State Management

### Topics
- Global state
- Redux basics
- Redux Toolkit

### Practice
- Shopping cart state

---

## Day 23 — Performance Optimization

### Topics
- useMemo
- useCallback
- Lazy loading
- Code splitting

### Practice
- Optimize rendering

---

## Day 24 — Authentication

### Topics
- JWT authentication
- Protected routes
- Login systems

### Practice
- Simple auth app

---

## Day 25 — React Hook Form

### Topics
- Form libraries
- Validation
- Yup integration

### Practice
- Advanced forms

---

## Day 26 — TypeScript with React

### Topics
- React + TypeScript
- Typing props
- Interfaces
- Type safety

### Practice
- Convert components to TypeScript

---

## Day 27 — Deployment

### Topics
- Production builds
- Environment variables
- Hosting React apps

### Platforms
- Vercel
- Netlify
- Render

### Practice
- Deploy React project

---

## Day 28 — Final Project

### Build One Complete App

Choose one:
- E-commerce App
- Dashboard App
- Chat App
- Expense Tracker
- LMS Dashboard

### Requirements
- Routing
- API integration
- Authentication
- State management
- Responsive UI

---

# Recommended React Ecosystem

## Libraries
- React Router
- Axios
- Redux Toolkit
- React Hook Form
- Tailwind CSS

---

# Recommended Folder Structure

```bash
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── context/
 ├── services/
 ├── routes/
 ├── assets/
 ├── layouts/
 └── utils/
```

---

# Best Practices

- Build reusable components
- Keep components small
- Use clean folder structures
- Separate logic from UI
- Use environment variables
- Avoid unnecessary re-renders

---

# Expected Outcome

By the end of this 4-week roadmap, you should be able to:

- Build React applications confidently
- Create reusable components
- Manage state effectively
- Consume APIs
- Implement routing
- Handle forms
- Build scalable applications
- Deploy React apps professionally