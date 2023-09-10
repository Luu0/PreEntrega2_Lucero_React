import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailCointainer';


function App() {
  return (
    <>
    
    <NavBar></NavBar>
    <ItemListContainer/>   
    <ItemDetailContainer/>
    </>
  )
}

export default App
