import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BookApp } from './BookApp'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookApp />
  </StrictMode>,
)
