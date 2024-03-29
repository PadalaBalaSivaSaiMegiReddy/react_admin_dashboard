
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <div className='app'>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App
