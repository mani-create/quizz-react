import React, { useEffect, useState } from 'react';
import './App.css';
import { Redirect, Route } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import Quiz from "./components/QuizMain"

let Username = "user"
let Password = "user@123"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spacing: {
    margin: 20
  }
}));

function App() {
  const classes = useStyles();
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  function handleLogin() {

    if (userName === Username && password === Password) {
      setRedirect(true)
    } else {
      setUserName("")
      setPassword("")
      alert("Username or Password is Invalid!!..")
    }

  }


  return (
    <div className="App">
      <div className={classes.root} >
        <div>
          <TextField label="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} className={classes.spacing} id="outlined-required" variant="outlined" />
          <TextField
            id="outlined-password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.spacing}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          /></div>

        <Button variant="outlined" onClick={handleLogin}>Login</Button>
        {redirect ? <Redirect to="/quiz" /> : null}
      </div>


    </div>
  );
}

export default App;
