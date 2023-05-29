import { useParams } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import { useEffect } from "react";
import { useState } from "react";

function MovieDetails() {
    const [movie, setMovie] = useState();
    const {id} = useParams();

    useEffect(()=> {
        const fetchMovies = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${filter}?api_keys=${
                    import.meta.env.VITE_API_KEYS
                }`
            );
            const data = await res.json();
            console.log(data);
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <p>{movie.budget}</p>
            <MarkAsSeenBtn/>
        </div>
    );
}

export default MovieDetails;