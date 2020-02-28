import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import addindust from "./components/add-indust.component";
import EditTodo from "./components/edit-todo.component";
import home from "./components/home.component";
import listindust from "./components/list-indust.component";
import violatinos from "./components/violations.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/industries" className="nav-link">Industry List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/violations" className="nav-link">Violations</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Industry</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={home} />
          <Route path="/industries"  component={listindust} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={addindust} />
          <Route path="/violations"  component={violatinos} />
        </div>
      </Router>
    );
  }
}

export default App;