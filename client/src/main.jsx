import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import Store from './redux/store.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Intégration de Redux dans l'application */}
    <Provider store={Store}>
      {/* Synchroniser l'interface utilisateur avec l'URL */}
      < BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
