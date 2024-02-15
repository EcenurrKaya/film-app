import React from "react"
import Movies from "../components/Movies";

const Page = async({searchParams})=>{
    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trneding/all/day"}?api_key=01fc4a6b68277884f109cb68d3e0b5d2&language=en-US&page=1`, 
    {next:{revalidate:1000}})

    const data = await res.json();
    return(
    <div className="flex items-center justify-center flex-wrap gap-3">    
        {
            data?.results?.map((dt,i)=>(
                <Movies dt={dt} key={i}/>
            ))
        }
    </div>
    )
}

export default Page