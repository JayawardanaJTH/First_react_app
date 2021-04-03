import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import App from './App';
import About from './routes/About';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/home" component={App}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
  </React.StrictMode>,
document.getElementById('root'),
// document.getElementById('root2')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
