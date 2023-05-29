import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MyMoviesProvider from "./context/MyMoviesContext";


function App() {
    return (
        <div>
            <MyMoviesProvider>
            <Header />
            <Main />
            <Footer /> 
            </MyMoviesProvider>
        </div>
    );
}

export default App;