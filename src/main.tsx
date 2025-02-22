import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@unocss/reset/normalize.css'
import './index.css'
import './tailwind.css'
import App from './App.tsx'
import 'virtual:uno.css'
import '@/assets/styles/index.scss'
import { HashRouter } from 'react-router-dom' // 使用 Routes 和 Route
// https://www.ezdia.com/brand-seller-solutions/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>,
)
