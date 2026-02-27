import { StrictMode } from 'react' //StrictMode is a component that helps us catch errors in the app
import { createRoot } from 'react-dom/client' //createRoot is a function that creates a root for the app
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//main.jsx is the entry point of the app and is created by vite