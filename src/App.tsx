import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'

function App() {

  return (
    <>
      <Routes>
         <Route element={<Home/>} path='/'/>
         <Route element={<Menu/>} path='/menu'/>
         <Route element={<About/>} path='/about'/>
      </Routes>
    </>
  )
}

export default App
