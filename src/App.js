import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { ItemsList } from "./components/Items/ListItems/ItemsList";
import { ThemeProvider } from "@material-ui/styles";
import { orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";
import { Home } from "./pages/Home";
import { ItemDetailContainer } from "./components/Items/ItemDetail/ItemDetailContainer";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/drinks/:type" exact component={ItemsList} />
            <Route path="/drinks/drink/:drinkId" exact component={ItemDetailContainer} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
