import React from "react";
import "./App.css";
import Login from "./components/Login";
import Router from "./components/Router/Router";

const token = false;
function App() {
  if (token) {
    return (
      <>
        <Router />
      </>
    );
  } else {
    return <Login />;
  }
}

export default App;
