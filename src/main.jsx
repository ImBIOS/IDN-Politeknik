import React from 'react'
import ReactDOM from 'react-dom/client' 
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { About, Academic, Contact, Event } from './pages/Router'

import App from './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="about" element={<About />} />
    <Route path="academic" element={<Academic />} />
    <Route path="Contact%20Us" element={<Contact />} />
    <Route path="event" element={<Event />} />
  </Routes>
</BrowserRouter>
)