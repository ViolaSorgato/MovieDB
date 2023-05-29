import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Main() {
      return (
        <div>
            <h1>MovieDB</h1>
            <MovieList/>
            <MovieDetails/>
            <About/>
            <Contact/>
        </div>
      );
    }

    export default Main;