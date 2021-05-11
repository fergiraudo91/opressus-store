import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { ItemDetailContainer } from "../components/Items/ItemDetail/ItemDetailContainer";
import { ItemsList } from "../components/Items/ListItems/ItemsList";
import NavBar from "../components/NavBar/NavBar";
import { Cart } from "../pages/Cart";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
export const AppRoute = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/drinks/:type" exact component={ItemsList} />
        <Route path="/drink/:drinkId" exact component={ItemDetailContainer} />
      </Switch>
      <Footer />
    </Router>
  );
};
