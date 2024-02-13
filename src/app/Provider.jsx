"use client"
import { ThemeProvider } from "next-themes"
import React from "react"

const Provider =({children})=>{
    return(
    <ThemeProvider enableSystem={false} attribute="class">    
       {children}
    </ThemeProvider>
    )
}

export default Provider