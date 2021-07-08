import * as React from "react"
import "../styles/main.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ContextProviderComponent } from "../Context"


const Layout = ({ children, location }) => {
    return (
        <ContextProviderComponent>
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
        </ContextProviderComponent>
    )
}

export default Layout
