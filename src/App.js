import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";
import { AppRoute } from "./routes/AppRoute";
import { CartContext } from "./components/context/CartContext";
import { useState } from "react";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  const [cart, setCart] = useState([{}]);
  return (
    <CartContext.Provider value={{cart, setCart}}>
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
    </div>
    </CartContext.Provider>
  );
}

export default App;
