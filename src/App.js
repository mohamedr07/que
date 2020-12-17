import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView'
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
        
      
      <Router>
      
      <Navbar />

      <section className="App-header d-flex align-items-center min-vh-100">
        <div className="container text-center">
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/admin">
                    <AdminView/>
                </Route>
                <Route path="/login">
                    <LoginView/>
                </Route>
            </Switch>     
        </div>
      </section>
      </Router>
    </div>
  );
}

export default App;
