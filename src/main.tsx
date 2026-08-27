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
import './workbench-iridescent.css';
import './workbench-cinematic.css';
import './landing-blue.css';
import './workbench-3d.css';
import './project-links.css';
import './contact-simplify.css';
import './contact-card-fix.css';
import './about-interactions';
import './toolkit-icons';
import './project-links';
import './contact-simplify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
