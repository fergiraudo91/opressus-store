import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { SignUp } from "./components/pages/SignUp";
import {Cart} from './components/pages/Cart';
import { Drinks } from "./components/pages/Drinks";
import { ItemsList } from "./components/Items/ItemsList";
import { ItemDetailContainer } from "./components/Items/Detail/ItemDetailContainer";
import beer from './data/beers.json'
import { ThemeProvider } from "@material-ui/styles";
import { orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: orange
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/sign-up' exact component={SignUp}/>
          <Route path='/cart' exact component={Cart}/>
          <Route path='/drinks/:type' exact component={Drinks} />
        </Switch>
      </Router>
      <ItemsList />
      <ItemDetailContainer title={beer[0].title} type={beer[0].type} prices={beer[0].prices} description={beer[0].description} img={`http://c2060241.ferozo.com/${beer[0].img}`} />
      </ThemeProvider>
    </div>
  );
}

export default App;
