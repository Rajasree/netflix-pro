import React,{useEffect, useState} from 'react'
import "./RowPost.css";
//import YouTube from 'react-youtube'
import axios from '../../axios.js'
import {API_KEY,imageUrl} from '../../constants/constants.js'


function RowPost() {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=6c75e1d28483dee4f03b23cf3d7562d4&with_networks=213').then((response)=>{
    console.log('---1111-----')
    console.log(response.data.results[0])
    setMovies(response.data.results)
    console.log(movies)
  })
  },[])
  const handleMovie = (id) => {
    axios.get('https://api.themoviedb.org/movie/${id}/videos?api_key=6c75e1d28483dee4f03b23cf3d7562d4&language=en-US').then(response => {
      if(response.data.length != 0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("Array Empty")
      }
    })
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
      <div className="row">
          <h2>Netflix Originals</h2>
          <div className="poster">
            {movies.map((obj) => 
            <img onClick={() => handleMovie(obj.id)} className='poster' alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            )}
          </div>
          
      </div>
  )
}

export default RowPost
