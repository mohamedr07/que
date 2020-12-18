import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminProviderView from './components/AdminProviderView';
import AdminProviderEditView from './components/AdminProviderEditView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Processes from './components/processes/Processes';
import CardTest from './components/CardTest';
import Providers from './components/providers/Providers'
import Stations from './components/stations/Stations'
import Queues from './components/queues/Queues'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* align-items-center */}
        <section className="App-header d-flex  min-vh-100">
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
              <Route path="/card">
                <CardTest />
              </Route>
              <Route path="/login">
                <LoginView />
              </Route>
              <Route path="/register">
                <RegisterView />
              </Route>
              <Route path="/providers">
                <Providers />
              </Route>
              <Route path="/stations">
                <Stations />
              </Route>
              <Route path="/queues">
                <Queues />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
