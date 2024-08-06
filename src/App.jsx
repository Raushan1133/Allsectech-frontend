import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <main className='min-h-[calc(100vh-120px)]'>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
