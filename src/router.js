import React from "react";
import WizardOne from "./components/WizardOne/WizardOne";
import WizardTwo from "./components/WizardTwo/WizardTwo";
import WizardThree from "./components/WizardThree/WizardThree";
import WizardFour from "./components/WizardFour/WizardFour";
import WizardFive from "./components/WizardFive/WizardFive";
import WizardSix from "./components/WizardSix/WizardSix";
import WizardSeven from "./components/WizardSeven/WizardSeven";
import WizardEight from "./components/WizardEight/WizardEight";
import WizardNine from "./components/WizardNine/WizardNine";
import WizardTen from "./components/WizardTen/WizardTen";
import WizardEleven from "./components/WizardEleven/WizardEleven";
import Finish from "./components/Finish/Finish";

import NextBtn from "./components/NextBtn/NextBtn";
import { Switch, Route, HashRouter } from "react-router-dom";

// 1. Let's begin by opening src/router.js. Since this will no longer be a function, all we need to do is export the content inside of the return statement and delete everything else that's part of the function. We'll also need to make modifications to each route so that it looks like: <Route component={ theComponent } path="/thePath" />. When finished you'll end up with: CONTINUE TO APP.JS, SETEP 2
export default (
  <Switch>
    <Route component={NextBtn} exact path="/" />
    <Route component={WizardOne} path="/wOne" />
    <Route component={WizardTwo} path="/wTwo" />
    <Route component={WizardThree} path="/wThree" />
    <Route component={WizardFour} path="/wFour" />
    <Route component={WizardFive} path="/wFive" />
    <Route component={WizardSix} path="/wSix" />
    <Route component={WizardSeven} path="/wSeven" />
    <Route component={WizardEight} path="/wEight" />
    <Route component={WizardNine} path="/wNine" />
    <Route component={WizardTen} path="/wTen" />
    <Route component={WizardEleven} path="/wEleven" />
    <Route component={Finish} path="/finish" />
  </Switch>
);
