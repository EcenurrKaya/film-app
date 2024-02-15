import Movies from "@/src/components/Movies";
import React from "react";

const Page= async({params})=>{
    const keyword = params.keyword

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=01fc4a6b68277884f109cb68d3e0b5d2&query=${keyword}&language=en-US&page=1`)
    const data = await res.json();
    return(
        <div>
            {
                !data?.results? 
                <div>Aranılan şey bulunamadı</div> :
                <div className="flex items-center flex-wrap gap-3">
                    {
                        data?.results?.map((dt, i)=>(
                            <Movies key={i} dt={dt}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Page