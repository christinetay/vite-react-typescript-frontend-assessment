import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
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


const rootDocument = document.getElementById('root') as HTMLElement;
createRoot(rootDocument).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
