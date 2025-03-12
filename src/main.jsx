import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BotonEnviar from './Components/Publics/Botonenviar.jsx'
import BotonGuardar from './Components/Publics/Botonguardar.jsx'
import Botoneliminar from './Components/Publics/Botoneliminar.jsx'
import Header from '/alejandra/Pablo/Proyecto_Gadder/src/Components/Publics/Header.jsx'
import Footer from './Components/Publics/Footer.jsx'
import BotonRegistro from './Components/Publics/Botonregistro.jsx'
import Formularioregistro from './Components/Publics/Formularioregistro.jsx'
import Registro from './App/Publics/Registro.jsx'
import Inicioses from './App/Publics/Iniciosesion.jsx'
import Home from './App/Publics/Home.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Home/>
  </StrictMode>,
)
