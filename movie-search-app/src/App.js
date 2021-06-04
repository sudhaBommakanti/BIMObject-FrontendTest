import './App.css';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from './components/SearchPage';
import SearchPageDetails from './components/SearchPageDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <SearchPage />}/>
          <Route
            path="/search-page-details/:id"
            render={({ match }) => (
              <SearchPageDetails match={match}/>
            )}/>
           
        </Switch>
      </div>
    </Router>
  );
}

export default App;
