import './RoudLayout.css'
import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
function RoudLayout() {
  return (
    <div>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RoudLayout