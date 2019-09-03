import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import {ItemList} from "./components/ItemList";
import {
  retrieveItems,
  addItem,
  main
} from "./services/AuthService";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
    token: ""
  });

  function onClickSignIn(event, email, password) {
    event.preventDefault();

    if (state.email === "YNAPEyJk" && state.password === "ylYJDgFmnAIs") {
      main()
        .catch(error => console.error(error))
        .then(response =>
          setState({
            email,
            password,
            items: response.items,
            token: response.token,
            isLoggedIn: true
          })
        );
    } else if (state.email === "") {
      return alert("Proszę podać login");
    } else if (state.password === "") {
      return alert("Proszę podać hasło");
    } else {
      return alert("Nieprawidłowy login lub hasło");
    }
  }

  function onLoginChange(event) {
    setState({
      ...state,
      email: event.target.value
    });
  }

  function onPasswordChange(event) {
    setState({
      ...state,
      password: event.target.value
    });
  }

  function onInputChange(event) {
    setState({
      ...state,
      newitem: event.target.value
    });
  }

  const OnAddClick = () => {
    const name = state.newitem;
    const item = { name };

    addItem(item, state.token)
      .catch(error => console.error(error))
      .then(() => retrieveItems(state.token))
      .then(newItems => setState({ ...state, newitem: "", items: newItems }));
  };

  const onLogoutClick = () => {
    if (window.confirm("Czy na pewno chcesz się wylogować?")) {
      setState({
        ...state,
        items: [],
        isLoggedIn: false
      });
    }
  };

  const UserLogin = () => {
    return (
      <div>
        <Login
          onClick={(event, email, password) =>
            onClickSignIn(event, email, password)
          }
          onLoginChange={event => onLoginChange(event)}
          onPasswordChange={event => onPasswordChange(event)}
          email={state.email}
          password={state.password}
        />
      </div>
    );
  };

  return (
    <>
      <Router>
        <div>
          <Switch>
            {state.isLoggedIn ? (
              <>
                <Redirect from="/" to="/items" />
                <Route
                  exact
                  path="/items"
                  render={props => (
                    <ItemList
                      {...props}
                      OnClick={OnAddClick}
                      rows={state.items}
                      onLogoutClick={onLogoutClick}
                      newitem={state.newitem}
                      onInputChange={onInputChange}
                    />
                  )}
                />
              </>
            ) : (
              <>
                <Redirect from="/items" to="/" />
                <Route exact path="/" component={UserLogin} />
              </>
            )}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
