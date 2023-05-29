import { useState } from "react";
import { FiEye } from "react-icons/fi";
import MovieDrawer from "../MovieDrawer/MovieDrawer";
import { useMyMoviesContext } from "../../context/MyMoviesContext";

export default function MyMovies() {
  const [open, setOpen] = useState(false)

  const {myMovies} = useMyMoviesContext()


      return (
        <div className="my_movies" onClick={() => setOpen(true)}>
       <p>{myMovies.length}</p>
       <FiEye />
       <MovieDrawer open={open} setOpen={setOpen} />
        </div>
      )
    }

