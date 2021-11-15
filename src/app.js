import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/header/header-component";
import LandingComponent from "./components/landing/landing-component";
import CardsListComponent from "./components/cards-list/cards-list-component";
import SignInComponent from "./components/sign-in/sign-in-component";
import LoginComponent from "./components/login/login-component";
import UserProfileComponent from "./components/user-profile/user-profile-component";
import MenuComponent from "./components/menu/menu-component";
import CreateServiceFormComponent from "./components/create-service-form/create-service-form-component";

import "./app.scss";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const isLoggedin = !!user;

  return (
    <Router>
      <HeaderComponent user={user} />
      <div className="content">
        <MenuComponent isLoggedin={isLoggedin} />
        <Switch>
          <Route
            path="/professionals"
            component={() => (
              <CardsListComponent user={user} type="Professional" />
            )}
          ></Route>

          <Route
            path="/businesses"
            component={() => <CardsListComponent user={user} type="Business" />}
          ></Route>

          {/* <Route
            path="/services"
            component={() => <CardsListComponent user={user} />}
          ></Route> */}

          <Route path="/signIn">
            <SignInComponent setUser={setUser} />
          </Route>

          <Route path="/login">
            <LoginComponent setUser={setUser} />
          </Route>

          <Route path="/user">
            <UserProfileComponent user={user} setUser={setUser} />
          </Route>

          <Route path="/createService">
            <CreateServiceFormComponent user={user} />
          </Route>

          <Route path="/">
            <LandingComponent isLoggedin={isLoggedin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
