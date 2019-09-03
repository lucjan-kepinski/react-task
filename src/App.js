import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import {
  authenticate,
  retrieveItems,
  addItem,
  main
} from "./services/AuthService";
import ItemTable from "./components/Table";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const NoMatch = () => <h1>404</h1>;

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false
  });

  function onClickSignIn(event, email, password) {

    event.preventDefault();

    if (state.email === "YNAPEyJk" && state.password === "ylYJDgFmnAIs") {
      main().catch(error => console.error(error)).then(items =>
      setState({        
        email,
        password,
        items, 
        isLoggedIn: true}))
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

    addItem(item)
      .catch(error => console.error(error))
      .then(() => retrieveItems())
      .then((newItems) =>
        setState({...state, newitem: "", items: newItems}))

    
  };

  const onLogoutClick = () =>
  { if (window.confirm("Czy na pewno chcesz się wylogować?")) { 
    setState({
      ...state,
      items: [],
      isLoggedIn: false
    });
  }
  }

const UserLogin = () => {
  return ( <div>
    <Login 
    onClick={(event, email, password) =>
      onClickSignIn(event, email, password)
    }
    onLoginChange={event => onLoginChange(event)}
    onPasswordChange={event => onPasswordChange(event)}
    email={state.email}
    password={state.password}
  />
  </div>)
}

const ItemList = (props) => {
  const { rows, OnClick, onLogoutClick, newitem } = props

  return ( <div>
    <ItemTable newrows={rows} />
    <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="newelement"
    label="Dodaj nowy element"
    name="newelement"
    autoComplete="email"
    autoFocus
    value={newitem}
    onChange={(event) => onInputChange(event)}
    />
    <AddButton OnClick={() => OnClick()} />
    <LogOutButton onLogoutClick={onLogoutClick}/>
    </div>
  )
}

  return (
    <>
      <Router>
          <div>
            <Switch>
              {state.isLoggedIn ? <><Redirect from="/" to="/items" />
              <Route exact path="/items" render={(props) => <ItemList {...props} OnClick={OnAddClick} rows={state.items} onLogoutClick={onLogoutClick} newitem={state.newitem}/>}/>
              </>
              : <><Redirect from="/items" to="/" /><Route exact path="/" component={UserLogin}/>
              </>}
            </Switch>
          </div>
      </Router>
    </>
  );
}

function AddButton(props) {
  const { OnClick } = props;
  return (
    <Button variant="contained" color="primary" onClick={() => OnClick()}>
      Dodaj
    </Button>
  );
}

function LogOutButton(props) {
  const { onLogoutClick } = props;
  return (
    <Button variant="contained" color="primary" onClick={()=> onLogoutClick()}>
      Wyloguj
    </Button>
  );
}

export default App;
