import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StudentAuthProvider } from './context/StudentAuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudentAuthProvider>
      <App />
    </StudentAuthProvider>
  </StrictMode>,
);
