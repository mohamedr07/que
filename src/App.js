import './App.css';
import AdminView from './components/AdminView';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <div>
        <Navbar />
       </div>

      <section className="App-header d-flex align-items-center min-vh-100">
        <div className="container text-center">
          <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/AdminView">
                    <AdminView/>
                </Route>

            </Switch>
          </Router>     
        </div>
      </section>
    </div>
  );
}

export default App;
