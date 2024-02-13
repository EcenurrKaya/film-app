import React from "react"
import {BiSearch} from 'react-icons/bi'
import MenuItem from "./MenuItem"
import ThemeComp from "./ThemeComp"

const Header =()=>{
    const menu =[
        {
            name:"Hakkında",
            url:"/about"
        },
        {
            name:"Giriş Yap",
            url:"/login"
        }
    ]
    return(
    <div className="flex items-center h-20 gap-3 p-5">    
        <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">MovieApp</div>
        <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
            <input placeholder="Arama" className="outline-none flex-1 bg-transparent" type="text"/>
            <BiSearch size={25}/>
        </div>
        <ThemeComp/>
        {
            menu.map((mn,i)=>(
                <MenuItem mn={mn} key={i}/>
            ))
        }
    </div>
    )
}

export default Header