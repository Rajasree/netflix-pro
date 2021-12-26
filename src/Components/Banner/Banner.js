import React, {useEffect, useState} from 'react'
import "./Banner.css";
import {API_KEY,imageUrl} from '../../constants/constants.js'
import axios from '../../axios.js'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    // axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US').then((response)=>{
    axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=6c75e1d28483dee4f03b23cf3d7562d4&language=en-US').then((response)=>{
      console.log('--------')
      setMovie(response.data.results[0])
      console.log(movie)
    })
  }, [])
  return (
      <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
      className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.title : ""}</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
  )
}

export default Banner
