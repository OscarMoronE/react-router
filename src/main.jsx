import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameApp } from './GameApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GameApp />
    </BrowserRouter>

  </StrictMode>,
)
