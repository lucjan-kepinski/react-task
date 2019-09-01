import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"

const REST_API_URL = 'http://frontend-recruitment.one2tribe.pl:8080';
// const REST_API_URL = 'http://localhost:3000';

const AUTH_OPTIONS = {
    credentials: 'include',
    mode: 'cors',
};

export const authenticate = async () => {
    const body = JSON.stringify({
        username: 'YNAPEyJk',
        password: 'ylYJDgFmnAIs'
    });

    const response = await fetch(`${REST_API_URL}/api/authenticate`, {
        method: 'post',
        ...AUTH_OPTIONS,
        body,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    return response.text();
};

const retrieveItems = async () => {
    const response = await fetch(`${REST_API_URL}/api/v1/item`, {
        ...AUTH_OPTIONS,
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IllOQVBFeUprIiwiZXhwIjoxNTY4MjA1NTMwLCJyb2wiOlsiVXNlciJdfQ.2wMBMUUb8FENFj2zOGKCyeYEQLpL1bVthoaGvgTFMYTzl12x9oEApk4hZC88h6Xma-SIC9D5rS09op-7R3RAGQ",
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    return response.json();
};

const addItem = async (item) => {
    const response = await fetch(`${REST_API_URL}/api/v1/item`, {
        method: 'post',
        ...AUTH_OPTIONS,
        body: JSON.stringify(item),
        headers: {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IllOQVBFeUprIiwiZXhwIjoxNTY4MjA1NTMwLCJyb2wiOlsiVXNlciJdfQ.2wMBMUUb8FENFj2zOGKCyeYEQLpL1bVthoaGvgTFMYTzl12x9oEApk4hZC88h6Xma-SIC9D5rS09op-7R3RAGQ",
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    return response.json();
};

const main = async () => {
    await authenticate();

    const items = await retrieveItems();

    console.log(items);
};

main().catch(error => console.error(error));

const button = document.createElement('button');

button.onclick = () => {
    console.log('click');

    const name = 'abc';
    const item = {name};

    addItem(item).catch(error => console.error(error));
};

button.textContent = 'Dodaj';

// document.body.appendChild(button);

function App() {
    const [state, setState] = useState({
        email: '',
        password: '',
        isLoggedIn: false
    })

    const LogIn = () => setState({
        ...state,
        isLoggedIn: true})

    function onClickSignIn(event, email, password) {
        setState({
            email,
            password,
            isLoggedIn: true})

        event.preventDefault()

        let userFound = false

                if (state.email === "YNAPEyJk" && state.password === "ylYJDgFmnAIs") {
                    return alert("sukces")
                } else {
                    return alert("dupa")
                }

    }

function onLoginChange(event){
     setState({
        ...state,
        email: event.target.value
}}

  return (
    <div className="App">
        <Login onClick={(event, email, password) => onClickSignIn(event, email, password)} onChange={onLoginChange(event)}/>
    </div>
  );
}

export default App;
