import Image from "next/image";
import React from "react";

const Movies=({dt})=>{
    <div className="min-w-[470px] relative imgContainer cursor-pointer">
        <Image width={450} height={300} fill src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
        <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-2xl font-bold">{db.title}</div>
            <div>{db.release_date}-{db.vote_average}</div>
        </div>
    </div>
}

export default Movies