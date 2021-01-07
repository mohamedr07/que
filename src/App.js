import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
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
import EditProvider from './components/providers/EditProvider'
import EditStation from './components/stations/EditStation'

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
              <Route path="/editprocess/:index" component={EditProcess} />
              <Route path="/createqueue" component={CreateQueue} />
              <Route path="/editqueue/:index" component={EditQueue} />
              <Route path="/editprovider/:index" component={EditProvider} />
              <Route path="/editstation/:index" component={EditStation} />

            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
