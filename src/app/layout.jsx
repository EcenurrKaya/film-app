import React from "react"
import './globals.css'
import Header from "../components/Header"
import Provider from "./Provider"

const Layout =({children})=>{
    return(
    <html>    
        <body>
            <Provider>
                <Header/>
                {children}
            </Provider>
        </body>
    </html>
    )
}

export default Layout
