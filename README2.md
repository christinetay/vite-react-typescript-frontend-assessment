# HOW TO CREATE REACT APP WITH VITE BY SCRATCH WITH STEPS BELOW

VITE IS A BUILD TOOL WHICH IS SUITABLE TO BUILD REACTJS APP BY SCRATCH.<br/>
THE BELOW ARE THE STEPS.

## 1. INSTALL VITE PACKAGE WITH THE TEMPLATE OF REACT AND NAMED IT AS FRONTEND-APP2

Open CMD and execute the command as below.<br/>
`npm create vite@latest frontend-app2 -- --template react`

## 2. NAVIGATE TO THE SELECTED FOLDER AND INSTALL DEPENDENCIES, THEN RUN THE APP.

Navigate to the frontend-app2 folder by the CMD command <br/>
`cd frontend-app2`<br/>
Install all dependencies from package.json by the CMD command<br/>
`npm install`<br/>
Update package.json and add this line under "scripts".  
`"start": "vite"`<br/>
Run the app by the CMD command<br/>
`npm start`

## 3. INSTALL TYPESCRIPT AND OTHER REACT RELATED PACKAGES

Open CMD and execute the command as below.<br/>
`npm install -D typescript @types/react @types/react-dom`

## 4. MODIFY FILES AND MAKE THEM ADAPT TO TYPESCRIPT FRAMEWORK

a) Change vite.config.js to vite.config.ts.<br/>

```javascript
{ "some": "json" }
```

b) Add tsconfig.json and add the content in as below.<br/>

```javascript
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

c) Add tsconfig.node.json and add the content in as below.

```javascript
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

d) Add vite-env.d.ts into scr/ folder and add the content in as below.<br/>
`/// <reference types="vite/client" />`

## 5. INSTALL MORE NPM PACKAGES INTO THE APP

Add react-select for select dropdown element<br/>
`npm i --save react-select` <br/>
Add html-react-parser for parse HTML to React parser that works on both the server (Node.js) and the client (browser)<br/>
`npm i --save html-react-parser`<br/>
Add the font of source-sans-pro<br/>
`npm install @fontsource/source-sans-pro`<br/>
Add the font of opens-sans<br/>
`npm install @fontsource/open-sans`

## 6. ADJUST THE FILES AFTER NPM PACKAGES INSTALLATION

a) Import font-awesome packages into index.tsx<br/>

```
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight
import "@fontsource/source-sans-pro/400-italic.css"; // Specify weight and style
import "@fontsource/source-sans-pro/600.css"; // Specify weight
import "@fontsource/source-sans-pro/600-italic.css"; // Specify weight and style
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style
import "@fontsource/open-sans/600.css"; // Specify weight
import "@fontsource/open-sans/600-italic.css"; // Specify weight and style
```

b) Update App.css as below.<br/>

```
#root {
  width: 100vw;
  height: 100vh;
}
.App {
  text-align: left;
}
button {
  outline: none !important;
}
```

## 7. ADD ENVIRONMENT VARIABLES

Vite has built-in support for loading environment variables.<br/>
The variables can be created in the steps below.<br/>
a) Create .env file<br/>
All environment variables must be prefixed with "VITE\_"<br/>

```
VITE_QUERY_RESULT_URL=https://gist.githubusercontent.com/.../queryResult.json
VITE_SUGGESTION_URL=https://gist.githubusercontent.com/.../suggestion.json
```

b) Call environment variables in tsx files <br/>

```
const variableA = import.meta.env.VITE_QUERY_RESULT_URL;
```

## 8. ADD TESTING FEATURE INTO THE APP BY VITEST

Vite has built-in support for testing using Vitest by install Vitest and React Testing Library as below.<br/>
a) Install dependencies<br/>
`npm install --save-dev vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event`<br/>
`npm install --save-dev jsdom`<br/>
b) Configure vite.config.js<br/>

```
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use global functions like `describe`, `it`, `expect` without imports
    environment: 'jsdom', // Use jsdom for simulating the browser environment
    setupFiles: './src/setupTests.ts', // Optional: Create a setup file for global configuration (e.g., jest-dom)
  },
});
```

c) Create a Setup File for Global Configurations, setupTests.js<br/>
`import '@testing-library/jest-dom';`<br/>

d) Change jest.fn() to vi.fn<br/>
vi.fn() is Vitest's version of jest.fn()<br/>

e) Update package.json as below.<br/>

```
"scripts": {
  "test": "vitest run", // Run tests once
  "test:watch": "vitest watch" // Watch for changes and re-run tests
  "test:coverage": "vitest -- --coverage" //run tests with coverage
}
```

f) Run test by CMD command<br/>
`npm run test`<br/>
`npm run test:watch`<br/>
`npm run test:coverage`
