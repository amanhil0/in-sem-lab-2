# In-Sem Lab 2

## Experiment 1: Component Rendering

**Question:** Create a main page App that renders three components: Header, StudentList and Footer. StudentList shows the names of 3 students.

## Solution

This React application uses three separate function components:

- `Header`: displays the page heading.
- `StudentList`: displays the sample names Aman, Rahul and Priya as a list.
- `Footer`: displays the lab title at the bottom.

`App` imports and renders these components in order. `main.jsx` mounts App into the HTML root element using `createRoot`.

## Run locally

Install Node.js 22.12 or newer, then run:

```sh
git clone https://github.com/amanhil0/in-sem-lab-2.git
cd in-sem-lab-2
npm install
npm run dev
```

Open the local URL printed in the terminal.

To build and preview:

```sh
npm run build
npm run preview
```

## Main component

```jsx
import React from 'react';
import Header from './components/Header.jsx';
import StudentList from './components/StudentList.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}
```

## Expected output

```text
Experiment 1 · Component Rendering
Student Directory

Student List
• Aman
• Rahul
• Priya

In-Sem Lab 2 · React Component Rendering
```

## Viva explanation

1. A component is a reusable function that returns JSX describing the UI.
2. Component names start with a capital letter, so React distinguishes them from HTML tags.
3. App is the parent component; Header, StudentList and Footer are its children.
4. The `map()` method converts the three student names into three `<li>` elements.
5. Each list item has a unique `key` so React can identify it when updating the list. Names are unique in this example; use student IDs if duplicate names are allowed.

Edit `src/components/StudentList.jsx` to change the sample names.
