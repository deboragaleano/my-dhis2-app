import React from "react";
import styles from "./App.module.css";
import {Navigation} from "./navigation"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Home, Form, Attributes, NoMatch} from "./views"

const MyApp = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <div className={styles.left}>
        <Navigation />
      </div>

      <div className={styles.right}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/form" component={Form} />

          <Route exact path="/attributes" component={Attributes} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default MyApp;
