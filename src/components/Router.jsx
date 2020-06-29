import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}
