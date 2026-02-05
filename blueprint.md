# AI Development Guidelines for Modern Web Projects in Firebase Studio

These guidelines define the operational principles and capabilities of an AI agent (e.g., Gemini) interacting with framework-less web projects (HTML, CSS, JavaScript) within the Firebase Studio environment. The goal is to enable an efficient, automated, and error-resilient application design and development workflow that leverages modern, widely supported web standards (Baseline).

## Project Overview

This project is a simple web application consisting of `index.html`, `style.css`, and `main.js`. It's designed to be a framework-less project, leveraging modern web standards.

## Implemented Features

### Initial Setup (Version 1)
- Basic HTML structure in `index.html`.
- Basic styling in `style.css`.
- Placeholder JavaScript in `main.js`.
- Project files (`index.html`, `main.js`, `style.css`, `blueprint.md`) committed and pushed to `https://github.com/morningkim/test_product`.

## Current Task: Dark/Light Mode Implementation and GitHub Deployment

### Plan for Current Task:
1.  **Implement Dark/Light Mode Toggle:**
    *   Add a toggle UI element (e.g., a button) to `index.html`.
    *   Implement JavaScript (`main.js`) to handle the toggle:
        *   Read/write user's preference to `localStorage`.
        *   Apply a CSS class (e.g., `dark-mode` or `light-mode`) to the `body` or `html` element.
    *   Add CSS (`style.css`) rules for both dark and light modes, using CSS variables for colors to make it easy to switch.
2.  **Verify Functionality Locally:** Test the dark/light mode toggle in the browser.
3.  **Git Operations:**
    *   Stage the modified files (`index.html`, `main.js`, `style.css`).
    *   Commit the changes with a descriptive message.
    *   Push the changes to the GitHub repository.