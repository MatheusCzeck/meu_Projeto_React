import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SkillManager } from './App.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkillManager />
  </StrictMode>,
)
