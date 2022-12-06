import { Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Nav from "./Pages/Nav/Nav";
import Home from "./Pages/Home/Home";
import start from "./Pages/Start/start";
import Details from "./Pages/Details/Details";
import Create from "./Pages/Create/Create";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={start} />

        <Route exact path="/videogames">
          <Nav />
          <Home />
        </Route>

        <Route exact path="/create">
          <Create />
        </Route>

        <Route exact path="/videogames/:id">
          <Details />
        </Route>

        <Route path="*">
          <h2>Pagina no encontrada.</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
