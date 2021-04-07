import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { SignUp } from "./components/pages/SignUp";
import {Cart} from './components/pages/Cart';
import { Drinks } from "./components/pages/Drinks";
import { ItemsList } from "./components/Items/ItemsList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/sign-up' exact component={SignUp}/>
          <Route path='/cart' exact component={Cart}/>
          <Route path='/drinks/:type' exact component={Drinks} />
        </Switch>
      </Router>
      <ItemsList />
    </div>
  );
}

export default App;
