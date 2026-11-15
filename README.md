# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler# Interactive Flashcard Study Deck (`js-react-interactive-flashcards`)

An interactive flashcard study app built with React, JavaScript, Vite, and Tailwind CSS featuring card flipping animations, category filtering, and mastery tracking.

## Features

- **Category Filtering:** Filter flashcards by JavaScript, React, Database, TypeScript, and Git.
- **Interactive Flipping:** Click anywhere on the card to toggle between question and answer.
- **Progress Tracking:** Monitor current card index and mastered review count.

## Setup & Running

1. Install dependencies:
   ```bash
   cd js-react-interactive-flashcards
   npm install
   ```

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
