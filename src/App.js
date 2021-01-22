import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
import Logout from './components/Logout'
import RegisterView from './components/RegisterView';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Processes from './components/processes/Processes';
import Providers from './components/providers/Providers'
import Stations from './components/stations/Stations'
import Queues from './components/queues/Queues'
import CreateStation from "./components/stations/CreateStationView";
import CreateQueue from "./components/queues/CreateQueueView";
import ProviderHome from './components/ProviderHome'
import AssignProvider from "./components/providers/AssignProvider";
import UserProcesses from "./components/UserProcesses"
import AddProcess from './components/processes/AddProcess';
import EditProcess from './components/processes/EditProcess';
import EditQueue from './components/queues/EditQueue'
import EditStation from './components/stations/EditStation'
import Screen from "./components/Screen"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* align-items-center */}
        <section className="App-header d-flex  min-vh-100">
          <div className="container text-center">
            <Switch>
              <Route exact path="/">
                <UserProcesses />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/providerHome">
                <ProviderHome />
              </Route>
              <Route path="/admin" exact>
                <AdminView />
              </Route>

              <Route path="/processes">
                <Processes />
              </Route>
              <Route path="/login">
                <LoginView />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/register">
                <RegisterView />
              </Route>
              <Route path="/providers">
                <Providers />
              </Route>
              <Route path="/assignprovider">
                <AssignProvider />
              </Route>
              <Route path="/stations">
                <Stations />
              </Route>
              <Route path="/createStation" component={CreateStation} />

              <Route path="/queues">
                <Queues />
              </Route>
              <Route path="/addprocess">
                <AddProcess />
              </Route>
              <Route path="/editprocess/:id" component={EditProcess} />
              <Route path="/createqueue" component={CreateQueue} />
              <Route path="/editqueue/:id" component={EditQueue} />
              <Route path="/editstation/:id" component={EditStation} />
              <Route path="/screen" component={Screen} />
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
