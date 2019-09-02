import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import { authenticate, retrieveItems, addItem, main } from "./services/AuthService"
import SimpleTable from "./components/Table"
import Button from "@material-ui/core/Button"

function App() {
    const [state, setState] = useState({
        email: '',
        password: '',
        isLoggedIn: false,
    })

    const LogIn = () => setState({
        ...state,
        isLoggedIn: true})

    function onClickSignIn(event, email, password) {
        const newitems = main().then(items => setState({
            email,
            password,
            isLoggedIn: true,
            items
        }))

        event.preventDefault()

                if (state.email === "YNAPEyJk" && state.password === "ylYJDgFmnAIs") {
                    return alert("sukces")
                } else if (state.email === ""){
                    return alert("Proszę podać login")
                } else if (state.password === ""){
                    return alert("Proszę podać hasło")
                } else {
                    return alert("Nieprawidłowy login lub hasło")
                }

    }

function onLoginChange(event){
     setState({
        ...state,
        email: event.target.value
})}

function onPasswordChange(event){
    setState({
       ...state,
       password: event.target.value,
})}

const OnClick = () => {
    console.log("click");
  
    const name = "abc";
    const item = { name };
  
    addItem(item).catch(error => console.error(error));
  };

  return ( <>{console.log(state)}
    {state.isLoggedIn ?
    <>
        <SimpleTable rows={state.items}/>
       <AddButton OnClick={OnClick}/>
       <DeleteButton />
       </> :
    <div className="App">     
        <Login 
        onClick={(event, email, password) => onClickSignIn(event, email, password)} 
        onLoginChange={(event) => onLoginChange(event)}
        onPasswordChange={(event) => onPasswordChange(event)}
        email={state.email} 
        password={state.password}/>
    </div>}
  </>);
}

function AddButton(props) {
    const { OnClick } = props
    return(
        <Button variant="contained" color="primary" onClick={()=>OnClick()}>
       Dodaj
       </Button>
    )
    }

function DeleteButton(props) {
    const { OnClick } = props
    return(
        <Button variant="contained" color="primary">Usuń</Button>
    )
}


export default App;
