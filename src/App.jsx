import './App.css'
import Abaut from './pages/Abaut'
import Home from './pages/Home'
import Contact from './pages/Contact'
import RoudLayout from './layout/RoudLayout'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoudLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/abaut' element={<Abaut/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
