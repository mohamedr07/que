import './App.css';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
import Logout from './components/Logout';
import RegisterView from './components/RegisterView';
import ForgotPasswordView from './components/ForgotPasswordView';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Processes from './components/processes/Processes';
import Providers from './components/providers/Providers';
import Stations from './components/stations/Stations';
import Queues from './components/queues/Queues';
import CreateStation from './components/stations/CreateStationView';
import CreateQueue from './components/queues/CreateQueueView';
import ProviderHome from './components/ProviderHome';
import AssignProvider from './components/providers/AssignProvider';
import UserProcesses from './components/UserProcesses';
import AddProcess from './components/processes/AddProcess';
import EditProcess from './components/processes/EditProcess';
import EditQueue from './components/queues/EditQueue';
import EditStation from './components/stations/EditStation';
import Screen from './components/Screen';
import { useEffect, useState } from 'react';
import axiosInstance from './components/Axios';

function App() {
  const [user, setUser] = useState(null);
  const [stations, setStations] = useState([]);
  useEffect(() => {
    let id = localStorage.getItem('id');
    if (id != null)
      axiosInstance.get(`users/${id}`).then((res) => setUser(res.data.user));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        {/* align-items-center */}
        <section className="App-header d-flex  min-vh-100">
          <div className="container text-center">
            <Switch>
              <Route exact path="/">
                <UserProcesses />
              </Route>
              <Route path="/home" component={Home} />
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
                <LoginView setUser={setUser} />
              </Route>
              <Route path="/logout">
                <Logout setUser={setUser} />
              </Route>
              <Route path="/register">
                <RegisterView />
              </Route>
              <Route path="/forgot-password">
                <ForgotPasswordView />
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
              <Route path="/screen">
                {' '}
                <Screen />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
