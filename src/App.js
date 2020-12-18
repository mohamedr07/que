import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminProviderView from './components/AdminProviderView';
import AdminProviderEditView from './components/AdminProviderEditView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Processes from './components/Processes';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      {/* d-flex align-items-center min-vh-100 */}
      <section className="App-header d-flex min-vh-100">
        <div className="container text-center">

            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/admin" exact>
                <AdminView />
              </Route>
              <Route path="/admin/providers/edit">
                <AdminProviderEditView />
              </Route>
              <Route path="/admin/providers">
                <AdminProviderView />
              </Route>

              <Route path="/processes">
                <Processes />
              </Route>
              <Route path="/login">
                <LoginView />
              </Route>
              <Route path="/register">
                <RegisterView />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
