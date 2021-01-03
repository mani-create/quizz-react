import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Quiz from './components/QuizMain';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={App} />
        <Route path="/quiz" exact component={Quiz} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
