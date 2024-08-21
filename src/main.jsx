import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProfileLayout from './layout/ProfileLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileLayout/>
  </StrictMode>,
)
