import './App.css';
import AdminView from './components/AdminView';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center min-vh-100">
        <div className="container text-center">
        <Router>
            <ul>
              <li>
                <Link to="/AdminView">Admin View</Link>
              </li>
            </ul>

            <Switch>
            <Route path="/AdminView">
              <AdminView/>
            </Route>
          </Switch>

        </Router>

          
          
        </div>
      </header>
    </div>
  );
}

export default App;
