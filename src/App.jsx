import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/jsx/Header'


function App() {

  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    </>

  )
}

export default App
