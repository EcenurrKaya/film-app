"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React from "react"

const Tabs =()=>{
    const searchParams =useSearchParams()
    const genre = searchParams.get('genre')
    const tabs=[
        {
            name:"En Popüler",
            url:"popular"
        },
        {
            name:"En Son",
            url:"latest"
        },
        {
            name:"Yakında Gelecek",
            url:"upcoming"
        }
    ]
    return(
    <div className="bg-gray-100 dark:bg-gray-800 p-5 m-5 flex items-center justify-center gap-7">    
        {
            tabs.map((tab, i)=>(
                <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url===genre?"underline text-amber-600 underline-offset-8":""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
            ))
        }
    </div>
    )
}

export default Tabs