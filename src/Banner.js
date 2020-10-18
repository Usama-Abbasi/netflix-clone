import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css'

function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
        }
        fetchData();
    }, [])
    console.log(movie);
    function truncateString(str, num) {
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My Playlist</button>
                </div>
                <h1 className="banner_description">{truncateString(movie?.overview,150)}</h1>
            </div>
        </header>
    )
}

export default Banner
