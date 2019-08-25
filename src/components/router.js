import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GlobalStyleSheet from "../components/globalstylesheet";
import Index from "../containers";
import Update from "../containers/update";

function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Router;
