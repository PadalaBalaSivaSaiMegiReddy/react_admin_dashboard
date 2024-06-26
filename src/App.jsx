
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newuser/NewUser'
import ProductList from './pages/productlist/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newproduct/NewProduct'

function App() {

  return (
    <>
      <div className='app'>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>


        </Routes>

        </div>
      </div>
    </>
  )
}

export default App
