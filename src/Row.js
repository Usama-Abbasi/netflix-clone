import React, { useState,useEffect } from 'react'
import axious from './axios';
import './Row.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseUrl="https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState("");
    useEffect(() => {
      async function fetchData(){
          const request=await axious.get(fetchUrl);
          setMovies(request.data.results)
          return request;
      }
      fetchData();
    }, [fetchUrl])
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };
    const handleClick=(movie)=>{
        if(trailerUrl){
            settrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get('v'));
            })
            .catch(error=>console.log(error))
        }
    }
    // console.table(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie=>(
                    <img 
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`} src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
