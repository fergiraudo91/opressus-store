import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { Home } from "./components/pages/Home";
import { SignUp } from "./components/pages/SignUp";
import {Cart} from './components/pages/Cart';
import { Drinks } from "./components/pages/Drinks";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-up' exact component={SignUp}/>
          <Route path='/cart' exact component={Cart}/>
          <Route path='/drinks/:type' exact component={Drinks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
