import * as React from "react"
import "../styles/main.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"


const Layout = ({ children, location }) => {
    return (
        <div>
            {location.pathname === '/' &&
                <Header currentPath={location} type={"homepage"}></Header>
            }
            {location.pathname !== '/' &&
                <Header currentPath={location} type={"regular"}></Header>
            }
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout
