import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalStyleSheet from "../components/globalstylesheet";
import Index from "../containers";
import Update from "../containers/update";

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <GlobalStyleSheet />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/update/">Update</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/update/" component={Update} />
      </div>
    </Router>
  );
}

export default AppRouter;
