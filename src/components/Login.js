import React, { useState } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { } from '@material-ui/core/'
import authenticate from '../App.js'

const handleClick = (event) => {
    console.log('dupa')
}

export const Login = initialState => {

    const [state, setState] = useState(initialState)



    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}>
             Zaloguj Się </Button>
         </div>
         </MuiThemeProvider>
      </div>
    );
}

const style = {
 margin: 15,
};
export default Login;