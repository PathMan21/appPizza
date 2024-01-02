import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Menu from '/src/components/menu.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
    <Menu></Menu>
  </React.StrictMode>
);