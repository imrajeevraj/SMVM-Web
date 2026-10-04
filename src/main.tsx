import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './styles/interactions.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user"><App /></MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)
