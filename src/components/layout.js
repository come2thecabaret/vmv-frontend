import * as React from "react"
import "../styles/main.scss"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, location }) => {
    let headerType = ''
    if (location.pathname === '/') {
        const headerType = 'homepage'
    } else {
        const headerType = 'regular'
    }
    return (
        <div>
            <Header currentPath={location} type={headerType}></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout;