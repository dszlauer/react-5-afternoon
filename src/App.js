import React, { Component } from "react";
import "./App.css";
import router from "./router";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {/* STEP 2. FROM ROUTER.JS If you noticed the app is no longer working, this is normal. We are restructuring the entire application. We can fix the errors by going into src/App.js and modifying how we are using router. Since it no longer a function, we take to remove the invocation and arguments. */}
        <HashRouter>{router}</HashRouter>
      </div>
    );
  }
}

export default App;
