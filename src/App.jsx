import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/jsx/Header'

function App() {

  return (
    <>
    <Header />
    <main>
    <h1>Hello</h1>
      <Outlet />
      
    </main>
    </>

  )
}

export default App
