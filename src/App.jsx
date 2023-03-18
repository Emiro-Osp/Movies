// import { MoviesGrid } from "./components/MoviesGrid";
import styles from './components/App.module.css';
import { BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { MovieDetails } from "./pages/MoviesDetails";
import { LandingPages } from "./pages/LandingPages";

export function App(){
    return  (
    <Router>
        <header>
        <Link to="/">  
        <h1 className={styles.title}> Movies </h1> 
        </Link>
        </header>
        
        <main>
        <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails /> 
          </Route>
          <Route path="/"><LandingPages /> 
          </Route>
        </Switch>
        </main>
    </Router>
    
    );
};