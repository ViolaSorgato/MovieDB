import FilterDrowdown from "../FilterDropdown/FilterDropdown"
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./MovieList.css";

function MovieList() {

const [MovieList, setMovies] = useState([]);
const [filter, setFilter] = useState("popular");


useEffect(()=> {
    const fetchMovies = async () => {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${filter}?api_keys=${
                import.meta.env.VITE_API_KEYS
            }`
        );
        const data = await res.json();

        setMovies(data.results);
    };
    fetchMovies();
}, [filter]);

return (
    <div className="movie_list">
        <div className="movie_list_filter">
            <h4>Filter</h4>
            <FilterDrowdown filter={filter.get......} />
        </div>
    </div>
)

}
