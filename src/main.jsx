import React from 'react'
import ReactDOM from 'react-dom/client'
// *import Home from './pages/Home' Por estar usando o react router dom não preciso disso
//import default posso dar o nome que eu quiser quando uso o default
/*import {App, App2} from './App.jsx' Sou obrigado a respeitar o nome do import, "App as Abacate" é um forma de renomear*/
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
