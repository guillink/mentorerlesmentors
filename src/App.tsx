import React from "react";
import { Provider } from "react-redux";
import { Router, Link } from "@reach/router";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import { Home } from "./pages/Home";
import { Todos } from "./pages/Todos";
import { store } from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => (
  <Provider store={store}>
    <Navbar expand>
      <NavbarBrand>Sandbox</NavbarBrand>
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/todos" className="nav-link">
            Todo
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
    <Router>
      <Home path="/" />
      <Todos path="/todos" />
    </Router>
  </Provider>
);

export default App;
