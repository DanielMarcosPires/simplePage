import { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './Routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import Fundo from './Components/Fundo/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <Fundo/> 
      <Rotas />
    </BrowserRouter>
)
