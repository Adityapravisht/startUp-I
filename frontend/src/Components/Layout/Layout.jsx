import { Outlet } from "react-router-dom"
import Navbar from "../navigation/Navbar"
import Footer from "../navigation/Footer"
import { FooterBg } from "../navigation/FooterBg"

export const Layout = () => {
  return (
    <div >
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <FooterBg/> */}
      <Footer />
    </div>
  )
}

