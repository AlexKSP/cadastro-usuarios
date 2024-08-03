import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //import default posso dar o nome que eu quiser quando uso o default
/*import {App, App2} from './App.jsx' Sou obrigado a respeitar o nome do import, "App as Abacate" é um forma de renomear*/
import { GlobalStyles } from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
