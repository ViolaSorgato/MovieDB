import Button from "@mui/material/Button";
import { useState } from "react";
import { useMyMoviesContext } from "../../context/MyMoviesContext";

export default function MarkAsSeenBtn({movie}) {
  const [isMovieSeen, setMovieSeen] = useState(false)

  const  { addMovie, hasSeenMovie, removeMovie } = useMyMoviesContext()
  
  



  const handleClick = (event) => {
    event.preventDefault();

    if (isMovieSeen) {
      removeMovie(movie.id)
      return
    }
    
    addMovie(movie)

  }
      return (
        <Button variant='outlined' color='inherit' onClick={handleClick}>
        {isMovieSeen ? "Remove" : "Add"}
        </Button>
      )
    }

//This is how our purchase


