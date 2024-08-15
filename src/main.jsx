import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Entry from './Entry.jsx'
import 'semantic-ui-css/semantic.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entry />
  </StrictMode>
)
