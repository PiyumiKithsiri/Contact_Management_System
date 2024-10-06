import { StrictMode } from 'react';            // Import StrictMode for highlighting potential problems
import { createRoot } from 'react-dom/client'; // Import createRoot for rendering React app
import App from './App.jsx';                   // Import main App component

createRoot(document.getElementById('root')).render( // Render the app in the specified root element
  <StrictMode>                                      {/* Enable StrictMode for the app */}
    <App />                                         {/* Render the App component */}
  </StrictMode>,
);
