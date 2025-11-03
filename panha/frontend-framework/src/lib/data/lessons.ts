export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  image: string
  tags: string[]
  order: number
}

export interface LessonCategory {
  id: string
  name: string
  description: string
  icon: string
}

export const lessonCategories: LessonCategory[] = [
  {
    id: 'web-basics',
    name: 'Web Development Basics',
    description: 'Learn the fundamentals of web development',
    icon: '🌐'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Master JavaScript programming',
    icon: '⚡'
  },
  {
    id: 'react',
    name: 'React',
    description: 'Build modern web applications with React',
    icon: '⚛️'
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server-side programming and databases',
    icon: '🔧'
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    description: 'Create beautiful user interfaces',
    icon: '🎨'
  },
  {
    id: 'devops',
    name: 'DevOps & Deployment',
    description: 'Deploy and manage your applications',
    icon: '🚀'
  }
]

export const lessons: Lesson[] = [
  // Web Development Basics
  {
    id: 'html-basics',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web pages with HTML. Understand tags, elements, and document structure.',
    content: `# HTML Fundamentals

## What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.

## Basic Structure

Every HTML document has a basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first web page.</p>
</body>
</html>
\`\`\`

## Common HTML Elements

### Headings
HTML headings are defined with the \`<h1>\` to \`<h6>\` tags:
- \`<h1>\` - Most important heading
- \`<h6>\` - Least important heading

### Paragraphs
Paragraphs are defined with the \`<p>\` tag.

### Links
Links are created using the \`<a>\` tag:
\`\`\`html
<a href="https://example.com">Visit Example</a>
\`\`\`

### Images
Images are embedded using the \`<img>\` tag:
\`\`\`html
<img src="image.jpg" alt="Description">
\`\`\`

### Lists
- **Unordered lists**: \`<ul>\` with \`<li>\` items
- **Ordered lists**: \`<ol>\` with \`<li>\` items

## Practice Exercise

Try creating your own HTML page with:
1. A heading
2. A paragraph about yourself
3. A list of your hobbies
4. An image
5. A link to your favorite website

## Next Steps

Once you're comfortable with HTML basics, move on to CSS to learn how to style your web pages!`,
    category: 'web-basics',
    difficulty: 'beginner',
    duration: '30 min',
    image: '📄',
    tags: ['html', 'web', 'basics'],
    order: 1
  },
  {
    id: 'css-basics',
    title: 'CSS Styling',
    description: 'Make your websites beautiful with CSS. Learn selectors, properties, and layout techniques.',
    content: `# CSS Styling

## What is CSS?

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning of HTML elements.

## Adding CSS to HTML

There are three ways to add CSS:

### 1. Inline CSS
\`\`\`html
<p style="color: blue;">Blue text</p>
\`\`\`

### 2. Internal CSS
\`\`\`html
<head>
    <style>
        p { color: blue; }
    </style>
</head>
\`\`\`

### 3. External CSS (Recommended)
\`\`\`html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

## CSS Selectors

\`\`\`css
/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Multiple selectors */
h1, h2, h3 { font-family: Arial; }
\`\`\`

## Common CSS Properties

### Text Styling
\`\`\`css
p {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
\`\`\`

### Box Model
\`\`\`css
div {
    width: 300px;
    padding: 20px;
    border: 1px solid black;
    margin: 10px;
}
\`\`\`

### Colors
\`\`\`css
.element {
    color: red;              /* Named color */
    color: #ff0000;          /* Hex */
    color: rgb(255, 0, 0);   /* RGB */
    color: rgba(255, 0, 0, 0.5); /* RGBA with transparency */
}
\`\`\`

## Flexbox Layout

Flexbox makes it easy to create flexible layouts:

\`\`\`css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
\`\`\`

## Practice Exercise

Create a simple card component with:
1. A border and padding
2. A heading with custom color
3. A paragraph with specific font
4. Centered text
5. A hover effect

## Next Steps

Learn about responsive design and CSS Grid for advanced layouts!`,
    category: 'web-basics',
    difficulty: 'beginner',
    duration: '45 min',
    image: '🎨',
    tags: ['css', 'styling', 'design'],
    order: 2
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    description: 'Create websites that look great on all devices using media queries and flexible layouts.',
    content: `# Responsive Web Design

## What is Responsive Design?

Responsive web design ensures your website looks and works well on all devices - from phones to tablets to desktops.

## The Viewport Meta Tag

Always include this in your HTML \`<head>\`:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Media Queries

Media queries allow you to apply different styles based on screen size:

\`\`\`css
/* Mobile first approach */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
\`\`\`

## Flexible Images

Make images responsive:

\`\`\`css
img {
    max-width: 100%;
    height: auto;
}
\`\`\`

## Mobile-First Approach

Start designing for mobile, then add styles for larger screens:

\`\`\`css
/* Base styles for mobile */
.nav {
    display: block;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
    .nav {
        display: flex;
    }
}
\`\`\`

## Common Breakpoints

\`\`\`css
/* Small devices (phones) */
@media (max-width: 767px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Large devices (desktops) */
@media (min-width: 1024px) { }
\`\`\`

## Flexbox for Responsive Layouts

\`\`\`css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.grid-item {
    flex: 1 1 300px; /* Grow, shrink, basis */
}
\`\`\`

## Practice Exercise

Create a responsive navigation bar that:
1. Shows a hamburger menu on mobile
2. Displays horizontally on desktop
3. Changes layout at 768px breakpoint

## Next Steps

Learn CSS Grid for even more powerful layout options!`,
    category: 'web-basics',
    difficulty: 'intermediate',
    duration: '1 hour',
    image: '📱',
    tags: ['responsive', 'css', 'mobile'],
    order: 3
  },

  // JavaScript
  {
    id: 'javascript-basics',
    title: 'JavaScript Fundamentals',
    description: 'Start your programming journey with JavaScript. Learn variables, functions, and control flow.',
    content: `# JavaScript Fundamentals

## What is JavaScript?

JavaScript is a programming language that makes websites interactive. It runs in the browser and can respond to user actions.

## Variables

\`\`\`javascript
// Modern way (use these)
let age = 25;           // Can be changed
const name = "John";    // Cannot be changed

// Old way (avoid)
var oldStyle = "Don't use this";
\`\`\`

## Data Types

\`\`\`javascript
// String
let message = "Hello World";

// Number
let count = 42;
let price = 19.99;

// Boolean
let isActive = true;

// Array
let colors = ["red", "green", "blue"];

// Object
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Null and Undefined
let empty = null;
let notDefined;
\`\`\`

## Functions

\`\`\`javascript
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function (modern)
const greet = (name) => {
    return \`Hello, \${name}!\`;
};

// Short arrow function
const add = (a, b) => a + b;

// Call the function
console.log(greet("Alice")); // "Hello, Alice!"
\`\`\`

## Conditional Statements

\`\`\`javascript
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor";
\`\`\`

## Loops

\`\`\`javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Array iteration
const fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});
\`\`\`

## Array Methods

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Filter - keep elements that match
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// Reduce - combine all elements
const sum = numbers.reduce((total, n) => total + n, 0);
// 15
\`\`\`

## Practice Exercise

Create a program that:
1. Defines an array of numbers
2. Filters out odd numbers
3. Doubles the remaining numbers
4. Calculates the sum

## Next Steps

Learn about DOM manipulation to interact with web pages!`,
    category: 'javascript',
    difficulty: 'beginner',
    duration: '1 hour',
    image: '⚡',
    tags: ['javascript', 'programming', 'basics'],
    order: 4
  },
  {
    id: 'dom-manipulation',
    title: 'DOM Manipulation',
    description: 'Learn to interact with web pages dynamically. Change content, handle events, and create interactive experiences.',
    content: `# DOM Manipulation

## What is the DOM?

The DOM (Document Object Model) is a programming interface for HTML documents. It represents the page as a tree of objects that JavaScript can manipulate.

## Selecting Elements

\`\`\`javascript
// By ID
const header = document.getElementById('header');

// By class name
const buttons = document.getElementsByClassName('btn');

// By tag name
const paragraphs = document.getElementsByTagName('p');

// Query selector (modern, recommended)
const firstButton = document.querySelector('.btn');
const allButtons = document.querySelectorAll('.btn');
\`\`\`

## Changing Content

\`\`\`javascript
// Change text
element.textContent = "New text";

// Change HTML
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute('src', 'image.jpg');
element.id = 'newId';
element.className = 'new-class';
\`\`\`

## Changing Styles

\`\`\`javascript
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';

// Add/remove classes (better approach)
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
\`\`\`

## Creating and Removing Elements

\`\`\`javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.className = 'box';

// Add to page
document.body.appendChild(newDiv);

// Remove element
element.remove();

// Or remove child
parent.removeChild(child);
\`\`\`

## Event Handling

\`\`\`javascript
// Click event
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Modern arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Event with parameter
button.addEventListener('click', (event) => {
    console.log('Clicked element:', event.target);
});

// Common events
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);
input.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
\`\`\`

## Practical Example: Todo List

\`\`\`javascript
const input = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-btn');
const list = document.querySelector('#todo-list');

addButton.addEventListener('click', () => {
    const text = input.value.trim();

    if (text) {
        // Create list item
        const li = document.createElement('li');
        li.textContent = text;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        // Add to list
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // Clear input
        input.value = '';
    }
});
\`\`\`

## Practice Exercise

Create an interactive color changer:
1. Add three buttons (Red, Green, Blue)
2. When clicked, change the page background color
3. Display the current color name
4. Add a reset button

## Next Steps

Learn about asynchronous JavaScript and APIs!`,
    category: 'javascript',
    difficulty: 'intermediate',
    duration: '1.5 hours',
    image: '🎯',
    tags: ['javascript', 'dom', 'interactive'],
    order: 5
  },
  {
    id: 'async-javascript',
    title: 'Async JavaScript & APIs',
    description: 'Master asynchronous programming with callbacks, promises, and async/await. Learn to fetch data from APIs.',
    content: `# Async JavaScript & APIs

## Why Asynchronous?

JavaScript is single-threaded, but async operations allow it to handle tasks like API requests without blocking other code.

## Callbacks

The old way (can get messy):

\`\`\`javascript
function fetchData(callback) {
    setTimeout(() => {
        callback({ name: "John", age: 30 });
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
\`\`\`

## Promises

A better way to handle async operations:

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
\`\`\`

## Async/Await

The modern, cleanest way:

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
\`\`\`

## Fetch API

Making HTTP requests:

\`\`\`javascript
// GET request
async function getUsers() {
    const response = await fetch('https://api.example.com/users');
    const users = await response.json();
    return users;
}

// POST request
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const newUser = await response.json();
    return newUser;
}
\`\`\`

## Error Handling

\`\`\`javascript
async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://api.example.com/data');

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
\`\`\`

## Practical Example: Weather App

\`\`\`javascript
async function getWeather(city) {
    const apiKey = 'your-api-key';
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}\`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity
        };
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}

// Usage
getWeather('London').then(weather => {
    if (weather) {
        console.log(\`Temperature: \${weather.temperature}°C\`);
        console.log(\`Conditions: \${weather.description}\`);
    }
});
\`\`\`

## Multiple Async Operations

\`\`\`javascript
// Wait for multiple promises
async function fetchMultiple() {
    const [users, posts, comments] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
    ]);

    return { users, posts, comments };
}
\`\`\`

## Practice Exercise

Create a simple app that:
1. Fetches user data from a public API (like JSONPlaceholder)
2. Displays the data on the page
3. Handles loading states
4. Handles errors gracefully

## Next Steps

Learn React to build modern, component-based applications!`,
    category: 'javascript',
    difficulty: 'advanced',
    duration: '2 hours',
    image: '🔄',
    tags: ['javascript', 'async', 'api', 'fetch'],
    order: 6
  },

  // React
  {
    id: 'react-intro',
    title: 'Introduction to React',
    description: 'Get started with React. Learn about components, JSX, and the virtual DOM.',
    content: `# Introduction to React

## What is React?

React is a JavaScript library for building user interfaces. It was created by Facebook and is now one of the most popular frontend frameworks.

## Why React?

- **Component-Based**: Build encapsulated components
- **Declarative**: Describe what you want, React handles the how
- **Virtual DOM**: Fast and efficient updates
- **Reusable**: Write once, use anywhere
- **Large Ecosystem**: Tons of libraries and tools

## Setting Up React

\`\`\`bash
# Create a new React app
npx create-react-app my-app
cd my-app
npm start
\`\`\`

Or with Vite (faster):
\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

## Your First Component

\`\`\`jsx
function Welcome() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>Welcome to your first component.</p>
        </div>
    );
}

export default Welcome;
\`\`\`

## JSX

JSX is a syntax extension for JavaScript that looks like HTML:

\`\`\`jsx
function App() {
    const name = "Alice";
    const age = 25;

    return (
        <div className="container">
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
            <p>Next year you'll be {age + 1}!</p>
        </div>
    );
}
\`\`\`

**Important JSX Rules:**
- Use \`className\` instead of \`class\`
- Use \`htmlFor\` instead of \`for\`
- Always close tags: \`<img />\`, \`<input />\`
- Must return a single parent element
- Use \`{}\` for JavaScript expressions

## Props

Pass data to components:

\`\`\`jsx
function Greeting({ name, age }) {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>Age: {age}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Greeting name="Alice" age={25} />
            <Greeting name="Bob" age={30} />
        </div>
    );
}
\`\`\`

## Conditional Rendering

\`\`\`jsx
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign in.</h1>;
}

// Or using ternary
function Greeting({ isLoggedIn }) {
    return (
        <h1>
            {isLoggedIn ? 'Welcome back!' : 'Please sign in.'}
        </h1>
    );
}

// Or using &&
function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn && <h1>Welcome back!</h1>}
        </div>
    );
}
\`\`\`

## Lists and Keys

\`\`\`jsx
function TodoList() {
    const todos = [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a project' },
        { id: 3, text: 'Deploy it' }
    ];

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}
\`\`\`

## Component Composition

\`\`\`jsx
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function App() {
    return (
        <Card>
            <h2>My Card</h2>
            <p>This is inside the card!</p>
        </Card>
    );
}
\`\`\`

## Practice Exercise

Create a UserCard component that:
1. Accepts name, email, and avatar as props
2. Displays the information in a styled card
3. Shows a "Premium" badge if isPremium prop is true
4. Create a list of 3 UserCards

## Next Steps

Learn about React State and Hooks to make your components interactive!`,
    category: 'react',
    difficulty: 'beginner',
    duration: '1.5 hours',
    image: '⚛️',
    tags: ['react', 'jsx', 'components'],
    order: 7
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    description: 'Master useState, useEffect, and other hooks to add state and lifecycle to your components.',
    content: `# React Hooks

## What are Hooks?

Hooks let you use state and other React features in functional components. They were introduced in React 16.8.

## useState

Add state to your components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
\`\`\`

## Multiple State Variables

\`\`\`jsx
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    return (
        <form>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Age"
            />
        </form>
    );
}
\`\`\`

## State with Objects

\`\`\`jsx
function UserForm() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: 0
    });

    const handleChange = (field, value) => {
        setUser(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <form>
            <input
                value={user.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />
        </form>
    );
}
\`\`\`

## useEffect

Handle side effects (API calls, subscriptions, timers):

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This runs after component mounts
        async function fetchUser() {
            setLoading(true);
            const response = await fetch(\`/api/users/\${userId}\`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }

        fetchUser();
    }, [userId]); // Re-run when userId changes

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
\`\`\`

## useEffect Cleanup

\`\`\`jsx
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(interval);
        };
    }, []); // Empty array = run once on mount

    return <p>Seconds: {seconds}</p>;
}
\`\`\`

## useContext

Share data without passing props:

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Header />
            <Main />
        </ThemeContext.Provider>
    );
}

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className={theme}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </header>
    );
}
\`\`\`

## Custom Hooks

Create reusable logic:

\`\`\`jsx
// useLocalStorage hook
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// Usage
function App() {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}
\`\`\`

## Practice Exercise

Create a Todo App with:
1. useState for managing todo list
2. Input field to add new todos
3. Click to toggle completion
4. Delete button for each todo
5. useEffect to save to localStorage

## Next Steps

Learn about React Router for multi-page applications!`,
    category: 'react',
    difficulty: 'intermediate',
    duration: '2 hours',
    image: '🪝',
    tags: ['react', 'hooks', 'state', 'useeffect'],
    order: 8
  },

  // Backend Development
  {
    id: 'nodejs-basics',
    title: 'Node.js Fundamentals',
    description: 'Learn server-side JavaScript with Node.js. Build backend applications and APIs.',
    content: `# Node.js Fundamentals

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server, not just in the browser.

## Why Node.js?

- **JavaScript Everywhere**: Same language for frontend and backend
- **Fast**: Non-blocking I/O and event-driven architecture
- **NPM**: Huge package ecosystem
- **Scalable**: Great for real-time applications

## Installing Node.js

Download from [nodejs.org](https://nodejs.org) and verify:

\`\`\`bash
node --version
npm --version
\`\`\`

## Your First Node.js Program

Create \`app.js\`:

\`\`\`javascript
console.log('Hello from Node.js!');

// Using Node.js features
const os = require('os');
console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);
\`\`\`

Run it:
\`\`\`bash
node app.js
\`\`\`

## Modules

Node.js uses CommonJS modules:

\`\`\`javascript
// math.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };

// app.js
const math = require('./math');
console.log(math.add(5, 3));      // 8
console.log(math.multiply(5, 3)); // 15
\`\`\`

## Built-in Modules

\`\`\`javascript
// File System
const fs = require('fs');

// Read file
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Write file
fs.writeFileSync('output.txt', 'Hello World!');

// Async version (better)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Path module
const path = require('path');
console.log(path.join(__dirname, 'files', 'data.txt'));
\`\`\`

## Creating a Simple HTTP Server

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Node.js!</h1>');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
\`\`\`

## Routing

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    } else if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000);
\`\`\`

## NPM - Package Manager

\`\`\`bash
# Initialize project
npm init -y

# Install package
npm install express

# Install dev dependency
npm install --save-dev nodemon

# Install globally
npm install -g nodemon
\`\`\`

## Package.json Scripts

\`\`\`json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
\`\`\`

Run with:
\`\`\`bash
npm start
npm run dev
\`\`\`

## Environment Variables

Create \`.env\` file:
\`\`\`
PORT=3000
DATABASE_URL=mongodb://localhost/mydb
SECRET_KEY=mysecret
\`\`\`

Use with dotenv:
\`\`\`javascript
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
\`\`\`

## Practice Exercise

Create a simple file server that:
1. Reads a JSON file with user data
2. Serves it at /api/users endpoint
3. Handles errors gracefully
4. Logs each request

## Next Steps

Learn Express.js to build robust web applications!`,
    category: 'backend',
    difficulty: 'beginner',
    duration: '1.5 hours',
    image: '📦',
    tags: ['nodejs', 'backend', 'javascript'],
    order: 9
  },
  {
    id: 'express-apis',
    title: 'Building APIs with Express',
    description: 'Create RESTful APIs using Express.js. Learn routing, middleware, and error handling.',
    content: `# Building APIs with Express

## What is Express?

Express is a minimal and flexible Node.js web application framework. It provides a robust set of features for web and mobile applications.

## Installing Express

\`\`\`bash
npm init -y
npm install express
npm install --save-dev nodemon
\`\`\`

## Basic Express Server

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
\`\`\`

## Routing

\`\`\`javascript
const express = require('express');
const app = express();

// GET request
app.get('/api/users', (req, res) => {
    res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

// GET with parameter
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Alice' });
});

// POST request
app.post('/api/users', (req, res) => {
    res.json({ message: 'User created' });
});

// PUT request
app.put('/api/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} updated\` });
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} deleted\` });
});
\`\`\`

## Middleware

\`\`\`javascript
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();
};

app.use(logger);

// Route-specific middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'secret') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

app.get('/api/protected', authenticate, (req, res) => {
    res.json({ message: 'Protected data' });
});
\`\`\`

## Complete CRUD API Example

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// CREATE user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(index, 1);
    res.status(204).send();
});

app.listen(3000);
\`\`\`

## Error Handling

\`\`\`javascript
// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

## CORS

\`\`\`bash
npm install cors
\`\`\`

\`\`\`javascript
const cors = require('cors');

app.use(cors()); // Allow all origins

// Or specific origin
app.use(cors({
    origin: 'http://localhost:3000'
}));
\`\`\`

## Practice Exercise

Create a Todo API with:
1. GET /api/todos - List all todos
2. POST /api/todos - Create a todo
3. PUT /api/todos/:id - Update a todo
4. DELETE /api/todos/:id - Delete a todo
5. Add validation middleware
6. Add error handling

## Next Steps

Learn about databases (MongoDB/PostgreSQL) to persist your data!`,
    category: 'backend',
    difficulty: 'intermediate',
    duration: '2 hours',
    image: '🛤️',
    tags: ['express', 'api', 'backend', 'nodejs'],
    order: 10
  },

  // UI/UX Design
  {
    id: 'design-principles',
    title: 'UI/UX Design Principles',
    description: 'Learn fundamental design principles to create beautiful and user-friendly interfaces.',
    content: `# UI/UX Design Principles

## What is UI/UX?

- **UI (User Interface)**: How it looks - colors, typography, spacing
- **UX (User Experience)**: How it works - flow, usability, accessibility

## Core Design Principles

### 1. Consistency

Keep design elements consistent throughout your application:
- Colors and fonts
- Button styles
- Spacing and layouts
- Terminology and labels

### 2. Visual Hierarchy

Guide users' attention to important elements:
- Size: Larger = more important
- Color: Bright colors attract attention
- Position: Top-left gets noticed first
- Contrast: Stand out from surroundings

### 3. White Space

Don't fear empty space! It:
- Improves readability
- Creates breathing room
- Highlights important content
- Looks professional

### 4. Alignment

Everything should align with something:
- Left-align text for readability
- Center-align headers
- Grid-based layouts
- Consistent margins

## Color Theory

### Color Schemes

\`\`\`css
/* Monochromatic - shades of one color */
--primary: #3b82f6;
--primary-light: #60a5fa;
--primary-dark: #2563eb;

/* Complementary - opposite colors */
--blue: #3b82f6;
--orange: #f97316;

/* Analogous - adjacent colors */
--blue: #3b82f6;
--purple: #8b5cf6;
--cyan: #06b6d4;
\`\`\`

### 60-30-10 Rule

- 60% - Dominant color (background)
- 30% - Secondary color (content areas)
- 10% - Accent color (buttons, highlights)

### Accessibility

Ensure good color contrast:
- Text should have 4.5:1 contrast ratio
- Large text: 3:1 minimum
- Use tools like WebAIM Contrast Checker

## Typography

### Font Pairing

\`\`\`css
/* Heading */
font-family: 'Montserrat', sans-serif;

/* Body */
font-family: 'Open Sans', sans-serif;
\`\`\`

**Tips:**
- Pair serif with sans-serif
- Use maximum 2-3 fonts
- Ensure good readability

### Type Scale

\`\`\`css
/* Use a consistent scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
\`\`\`

### Readability

- Line length: 50-75 characters
- Line height: 1.5-1.7 for body text
- Paragraph spacing: 1em
- Font size: minimum 16px for body

## Spacing

Use a consistent spacing system:

\`\`\`css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
\`\`\`

## Common UI Patterns

### Cards

\`\`\`css
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1.5rem;
}
\`\`\`

### Buttons

\`\`\`css
/* Primary action */
.btn-primary {
    background: #3b82f6;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
}

/* Secondary action */
.btn-secondary {
    background: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
}
\`\`\`

### Forms

- Clear labels above inputs
- Helpful placeholder text
- Visible focus states
- Inline validation
- Clear error messages

## Mobile-First Design

Design for mobile, then enhance for desktop:

1. Start with single column layout
2. Use touch-friendly sizes (44x44px minimum)
3. Prioritize content
4. Progressive enhancement

## Accessibility (A11y)

### Best Practices

- Semantic HTML (\`<nav>\`, \`<main>\`, \`<button>\`)
- Alt text for images
- Keyboard navigation
- Focus indicators
- ARIA labels when needed
- Color is not the only indicator

### Example

\`\`\`html
<!-- Good -->
<button aria-label="Close menu">
    <svg>...</svg>
</button>

<!-- Better -->
<button>
    <svg aria-hidden="true">...</svg>
    <span>Close menu</span>
</button>
\`\`\`

## Practice Exercise

Redesign a simple login page following these principles:
1. Use proper color contrast
2. Apply consistent spacing
3. Choose readable typography
4. Create visual hierarchy
5. Make it mobile-friendly
6. Ensure accessibility

## Resources

- Color: coolors.co, colorhunt.co
- Typography: fonts.google.com
- Inspiration: dribbble.com, behance.net
- Accessibility: webaim.org

## Next Steps

Learn CSS frameworks like Tailwind CSS to speed up your design workflow!`,
    category: 'design',
    difficulty: 'beginner',
    duration: '1.5 hours',
    image: '🎨',
    tags: ['design', 'ui', 'ux', 'principles'],
    order: 11
  },

  // DevOps
  {
    id: 'git-github',
    title: 'Git & GitHub',
    description: 'Master version control with Git. Learn to collaborate on projects using GitHub.',
    content: `# Git & GitHub

## What is Git?

Git is a distributed version control system that tracks changes in your code. It allows you to:
- Save snapshots of your code
- Revert to previous versions
- Collaborate with others
- Work on features in parallel

## Installing Git

Download from [git-scm.com](https://git-scm.com)

Configure Git:
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
\`\`\`

## Basic Git Workflow

### Initialize a Repository

\`\`\`bash
# Create new repo
git init

# Clone existing repo
git clone https://github.com/user/repo.git
\`\`\`

### Stage and Commit

\`\`\`bash
# Check status
git status

# Stage files
git add file.txt           # Single file
git add .                  # All files

# Commit
git commit -m "Add new feature"

# Stage and commit in one step
git commit -am "Update feature"
\`\`\`

### View History

\`\`\`bash
# View commits
git log

# Compact view
git log --oneline

# With graph
git log --graph --oneline
\`\`\`

## Branching

Branches let you work on features without affecting the main code:

\`\`\`bash
# Create branch
git branch feature-login

# Switch to branch
git checkout feature-login

# Create and switch (shortcut)
git checkout -b feature-login

# List branches
git branch

# Delete branch
git branch -d feature-login
\`\`\`

## Merging

\`\`\`bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature-login

# If conflicts occur, resolve them then:
git add .
git commit -m "Resolve merge conflicts"
\`\`\`

## Working with GitHub

### Connecting to GitHub

\`\`\`bash
# Add remote
git remote add origin https://github.com/user/repo.git

# View remotes
git remote -v

# Push to GitHub
git push -u origin main

# Push other branches
git push origin feature-login
\`\`\`

### Pulling Changes

\`\`\`bash
# Fetch and merge
git pull origin main

# Or separately
git fetch origin
git merge origin/main
\`\`\`

## Common Workflows

### Feature Branch Workflow

\`\`\`bash
# 1. Create feature branch
git checkout -b feature-user-auth

# 2. Make changes
# ... edit files ...

# 3. Commit changes
git add .
git commit -m "Add user authentication"

# 4. Push to GitHub
git push origin feature-user-auth

# 5. Create Pull Request on GitHub

# 6. After review, merge and delete branch
git checkout main
git pull origin main
git branch -d feature-user-auth
\`\`\`

### Fixing Mistakes

\`\`\`bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo changes to a file
git checkout -- file.txt

# Amend last commit
git commit --amend -m "New message"

# Unstage file
git reset HEAD file.txt
\`\`\`

## .gitignore

Ignore files you don't want to track:

\`\`\`
# .gitignore
node_modules/
.env
.DS_Store
*.log
dist/
build/
\`\`\`

## GitHub Features

### Pull Requests

1. Create a branch
2. Make changes
3. Push to GitHub
4. Open Pull Request
5. Code review
6. Merge

### Issues

Track bugs and features:
- Create issues
- Label them
- Assign to team members
- Reference in commits (#123)

### Forks

Copy someone's repo to contribute:
\`\`\`bash
# 1. Fork on GitHub
# 2. Clone your fork
git clone https://github.com/yourname/repo.git

# 3. Add upstream remote
git remote add upstream https://github.com/original/repo.git

# 4. Keep your fork updated
git fetch upstream
git merge upstream/main
\`\`\`

## Best Practices

### Commit Messages

\`\`\`bash
# Good
git commit -m "Add login validation"
git commit -m "Fix navbar responsive bug"
git commit -m "Update README with setup instructions"

# Bad
git commit -m "changes"
git commit -m "fix"
git commit -m "asdf"
\`\`\`

### Commit Often

- Small, logical commits
- Each commit should work
- Don't commit half-done features

### Branch Naming

\`\`\`bash
feature/user-authentication
bugfix/navbar-responsive
hotfix/security-patch
\`\`\`

## Useful Commands

\`\`\`bash
# See changes
git diff

# See changes in staged files
git diff --staged

# Stash changes temporarily
git stash
git stash pop

# View file from another branch
git show branch:file.txt

# Rename branch
git branch -m old-name new-name

# Revert a commit
git revert commit-hash
\`\`\`

## Practice Exercise

Create a simple project:
1. Initialize a Git repository
2. Create a README.md
3. Commit your changes
4. Create a GitHub repository
5. Push your code
6. Create a feature branch
7. Make changes and create a Pull Request

## Next Steps

Learn about CI/CD to automatically test and deploy your code!`,
    category: 'devops',
    difficulty: 'beginner',
    duration: '1.5 hours',
    image: '📚',
    tags: ['git', 'github', 'version-control'],
    order: 12
  }
]

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find(lesson => lesson.id === id)
}

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter(lesson => lesson.category === category).sort((a, b) => a.order - b.order)
}

export function getAllLessons(): Lesson[] {
  return lessons.sort((a, b) => a.order - b.order)
}