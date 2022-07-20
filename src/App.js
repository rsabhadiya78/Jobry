import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './containers/Home';
import Login from './containers/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/colors.css';
import Signup from "./containers/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='theme-layout'>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
