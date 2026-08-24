import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './landing.css';
import './about.css';
import './typography.css';
import './dock.css';
import './about-effects.css';
import './landing-fix.css';
import './workbench.css';
import './workbench-art.css';
import './toolkit-icons.css';
import './about-interactions';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
