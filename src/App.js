import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminProviderView from './components/AdminProviderView';
import AdminProviderEditView from './components/AdminProviderEditView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Processes from './components/processes/Processes';
import CardTest from './components/CardTest';
import Providers from './components/providers/Providers'
import Stations from './components/stations/Stations'
import Queues from './components/queues/Queues'
import CreateProvider from "./components/providers/CreateProviderView";
import CreateStation from "./components/stations/CreateStationView";
import CreateQueue from "./components/queues/CreateQueueView";
import ProviderHome from './components/ProviderHome'
import AssignProvider from "./components/providers/AssignProvider";
import UserProcesses from "./components/UserProcesses"
import addProcess from './components/processes/AddProcess'
import AddProcess from './components/processes/AddProcess';
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
              <Route path="/assignprovider">
                <AssignProvider />
              </Route>

              <Route path="/createprovider" component={CreateProvider} />

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
              <Route path="/createQueue" component={CreateQueue} />

            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
