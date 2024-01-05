import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Menu from './components/menu';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
    <Menu></Menu>
  </React.StrictMode>
);